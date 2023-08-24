import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandlerMiddleware.js";
import User from "../models/usersModel.js";

export const authUser = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(403);
    throw new Error("Not authorized, no token");
  }
});

export const adminMiddleware = (req, res, next) => {
  const isAdmin = req.user.isAdmin;

  if (isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized, not an admin");
  }
};
