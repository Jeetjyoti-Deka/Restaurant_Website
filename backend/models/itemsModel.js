import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  detail: String,
  fav: Boolean,
});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

export default FoodItem;
