import express from "express";
import { getItemById, getItems } from "../controller/itemsController.js";

const router = express.Router();

router.route("/").get(getItems);

router.route("/:id").get(getItemById);

export default router;
