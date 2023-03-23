import { Router } from "express";
import healthRouter from "./health.router";
import products from "./products.router";

const router = Router();

router.use("/health", healthRouter);
router.use("/products", products);

export default router;
