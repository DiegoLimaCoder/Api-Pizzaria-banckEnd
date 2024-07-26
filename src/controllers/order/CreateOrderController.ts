import { Request, Response } from "express";
import { CreateOrderServices } from "../../services/order/CreateOrderServices";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { table, name } = req.body;

    const createOrder = new CreateOrderServices();

    const order = await createOrder.execute({
      table,
      name,
    });

    return res.json(order);
  }
}

export { CreateOrderController };
