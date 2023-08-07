import itemModel from "../models/itemsModel.js";

export const getItems = async (req, res) => {
  try {
    const items = await itemModel.find({});
    res.json(items);
  } catch (error) {
    console.log(error);
  }
};

export const getItemById = async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = await itemModel.findById(itemId);
    res.json(item);
  } catch (error) {
    console.log(error);
  }
};
