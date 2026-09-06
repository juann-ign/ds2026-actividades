import { Router } from "express";
import * as autorController from "../controllers/autor.controller";
import { validate, validateParams } from "../middlewares/validate.middleware";
import { idParamSchema } from "../validations/autor.validation";
import {
  autorCreateSchema,
  autorUpdateSchema,
} from "../validations/autor.validation";
import { libroCreateSchema } from "../validations/libro.validation";
import { authenticate, authorize } from "../middlewares/auth.middleware";
import { isArgumentsObject } from "node:util/types";

const router = Router();

router.get("/", autorController.getAll);
router.get("/:id", validateParams(idParamSchema), autorController.getById);
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  validate(autorCreateSchema),
  autorController.create,
);
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  validate(autorCreateSchema),
  autorController.update,
);
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  validateParams(idParamSchema),
  autorController.remove,
);

export default router;
