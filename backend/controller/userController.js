import asyncHandler from "../middlewares/asyncHandlerMiddleware.js";
import User from "../models/usersModel.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (user && user.matchPassword(password)) {
    user = await User.findOne({ email }).select("-password");
    res.status(200).json(user);
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
