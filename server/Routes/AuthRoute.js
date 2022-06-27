import express, { Router } from "express";
import { logInUser, registerUser } from "../Controllers/AuthController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", logInUser);
export default router;
