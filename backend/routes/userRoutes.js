import express from "express";
import { login, logout } from "../controller/userController.js";
import { adminMiddleware, authUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/login").post(login);

router.post("/logout", logout);

router.get("/test", authUser, adminMiddleware, (req, res) => {
  res.send("token verified");
});

export default router;
