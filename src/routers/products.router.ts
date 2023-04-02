import { Request, Response, Router } from "express";
import { products } from "../data/db";
import ProductService from "../services/product.service";
import { Product } from "../models/product.model";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let products = ProductService.getAll();
  res.send(products);
});

router.post("/", (req: Request, res: Response) => {
  const { description, img, price, quantity } = req.body;

  const newProduct: Product = {
    id: products.length + 1,
    description,
    img,
    price,
    quantity,
  };
  const verifyID = ProductService.verifyIdProduct(newProduct);
  const product: Product = ProductService.createProduct(verifyID);
  if (product) {
    res.status(201).send({ message: "Produto criado com sucesso" });
  } else {
    res.status(400).send({ message: "Erro ao criar produto" });
  }
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, img, price, quantity } = req.body;
  const product: Product = {
    id: Number(id),
    description,
    img,
    price,
    quantity,
  };
  const updatedProduct: Product | boolean = ProductService.updateProduct(
    Number(id),
    product
  );
  if (updatedProduct) {
    res.status(200).send({ message: "Produto atualizado com sucesso" });
  } else {
    res.status(404).send({ message: "Produto não encontrado" });
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const product = ProductService.deleteProduct(Number(id));
  if (product) {
    res.status(200).send({ message: "Produto deletado com sucesso" });
  } else {
    res.status(404).send({ message: "Produto não encontrado" });
  }
});

export default router;
