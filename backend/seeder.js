import connectDb from "./db/connectDb.js";
import foodItems from "./data/items.js";
import itemModel from "./models/itemsModel.js";
import dotenv from "dotenv";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await itemModel.deleteMany();

    const data = await itemModel.insertMany(foodItems);

    console.log("Data imported successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await itemModel.deleteMany();

    console.log("Data destroyed successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
