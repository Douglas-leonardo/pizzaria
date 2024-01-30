import prismaClient from "../../prisma";

interface OrderRequest{
  table: number;
  name: string;
}

class CreateOrderService{
  async execute({ table, name}: OrderRequest ){

    const order = await prismaClient.order.create({
      data: {
        table: table,
        name: name,
        banner: "Pedido da mesa - " + table
      }
    });


    return order;

  }
}

export { CreateOrderService }