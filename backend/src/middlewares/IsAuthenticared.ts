import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    //Aqui eu vou receber o token do usuario e verificar se está correto
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(
            token, process.env.JWT_SECRET
        ) as PayLoad;

        //Recuperar o Id do Token e colocar dentro de uma variavel user_id dentro do Req.
        req.user_id = sub;

        return next();

    } catch (err) {
        return res.status(401).end();
    }
}