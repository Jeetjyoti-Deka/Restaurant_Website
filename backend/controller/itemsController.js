import asyncHandler from "../middlewares/asyncHandlerMiddleware.js";
import itemModel from "../models/itemsModel.js";

export const getItems = asyncHandler(async (req, res) => {
  const items = await itemModel.find({});

  if (items) {
    res.status(200).json(items);
  } else {
    res.status(404);
    throw new Error("Items not found");
  }
});

export const getItemById = asyncHandler(async (req, res) => {
  const itemId = req.params.id;

  const item = await itemModel.findById(itemId);

  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404);
    throw new Error("Item not found");
  }
});
