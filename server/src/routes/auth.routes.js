import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { validateLoginBody } from "../middleware/validate.middleware.js";

const router = Router();

router.post("/login", validateLoginBody, login);

export default router;
