import express from "express";
import {
  getUserProfile,
  login,
  logout,
  register,
  updateProfile,
} from "../controller/userController.js";
import { adminMiddleware, authUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/login").post(login);

router.post("/logout", logout);

router.post("/register", register);

router
  .route("/profile")
  .get(authUser, getUserProfile)
  .put(authUser, updateProfile);

router.get("/test", authUser, (req, res) => {
  res.send("token verified");
});

export default router;
