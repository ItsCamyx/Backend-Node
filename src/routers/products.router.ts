import { Request, Response, Router } from "express";
import { products } from "../data/db";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(products);
});

//alterar lógica para aber se id já existe
router.post("/", (req: Request, res: Response) => {
  const { description, img, price, quantity } = req.body;

  const product = {
    id: products.length + 1,
    description,
    img,
    quantity,
    price,
  };
  products.push(product);
  res.send(product);
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, img, price, quantity } = req.body;
  const product = products.find((product) => product.id === Number(id));
  if (product) {
    product.description = description;
    product.img = img;
    product.price = price;
    product.quantity = quantity;
    res.send(product);
  } else {
    res.status(404).send("Produto não encontrado");
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === Number(id));
  if (product) {
    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send(product);
  } else {
    res.status(404).send("Produto não encontrado");
  }
});

export default router;
