import { Request, Response, Router } from "express";

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ nome:'Sujeito Pizza' });
});

export { router };