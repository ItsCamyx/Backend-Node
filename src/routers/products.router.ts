import { Request, Response, Router } from "express";
import ProductService from "../services/product.service";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  ProductService.getAll()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req: Request, res: Response) => {
  const { description, img, price, quantity } = req.body;
  const product = {
    description,
    img,
    price,
    quantity,
  };

  ProductService.createProduct(product)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { description, img, price, quantity } = req.body;
  const product = {
    id: Number(id),
    description,
    img,
    price,
    quantity,
  };
  ProductService.updateProduct(Number(id), product)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  ProductService.deleteProduct(Number(id));
});

export default router;
