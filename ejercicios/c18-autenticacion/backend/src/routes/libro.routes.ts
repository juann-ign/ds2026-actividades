import { Router } from "express";
import * as libroController from "../controllers/libro.controller";
import { validate, validateParams } from "../middlewares/validate.middleware";
import { idParamSchema } from "../validations/libro.validation";
import {
  libroCreateSchema,
  libroUpdateSchema,
} from "../validations/libro.validation";

const router = Router();
router.get("/", libroController.getAll);
router.get("/:id", validateParams(idParamSchema), libroController.getById);
router.post("/", validate(libroCreateSchema), libroController.create);
router.put(
  "/:id",
  validate(libroUpdateSchema),
  validateParams(idParamSchema),
  libroController.update,
);
router.delete("/:id", validateParams(idParamSchema), libroController.remove);

export default router;
