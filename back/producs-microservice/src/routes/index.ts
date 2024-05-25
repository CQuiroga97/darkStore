import { Router } from "express";
import { productRouter } from "./product";

const router = Router();

router.use("", productRouter);

export { router };
