import connectDb from "./db/connectDb.js";
import foodItems from "./data/items.js";
import Item from "./models/itemsModel.js";
import User from "./models/usersModel.js";
import users from "./data/users.js";
import dotenv from "dotenv";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await Item.deleteMany();
    await User.deleteMany();

    const data = await User.insertMany(users);
    console.log(data);

    const items = foodItems.map((x) => ({ ...x, user: data[2]._id }));
    console.log(items);

    await Item.insertMany(items);

    console.log("Data imported successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Item.deleteMany();

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
