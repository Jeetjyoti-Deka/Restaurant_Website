import foodItems from "../data/items.js";

export const getItems = (req, res) => {
  res.json(foodItems);
};

export const getItemById = (req, res) => {
  const itemId = req.params.id;

  const item = foodItems.find((x) => x._id === itemId);
  res.json(item);
};
