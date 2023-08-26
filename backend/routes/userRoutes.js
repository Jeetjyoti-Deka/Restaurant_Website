import express from "express";
import { login, logout, register } from "../controller/userController.js";
import { adminMiddleware, authUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/login").post(login);

router.post("/logout", logout);

router.post("/register", register);

router.get("/test", authUser, (req, res) => {
  res.send("token verified");
});

export default router;
