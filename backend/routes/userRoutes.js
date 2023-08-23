import express from "express";
import { login } from "../controller/userController.js";

const router = express.Router();

router.route("/login").post(login);

export default router;
