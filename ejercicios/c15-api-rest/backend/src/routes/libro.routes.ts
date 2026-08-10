import { Router } from "express";
import * as librocontroller from "../controllers/libro.controller";

const router = Router();
router.get("/", librocontroller.getAll);
router.get("/:id", librocontroller.getById);
router.post("/", librocontroller.create);
router.put("/:id", librocontroller.update);
router.delete("/:id", librocontroller.remove);

export default router;
