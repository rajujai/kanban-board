import express from "express";
import commonController from "./common.controller";
import ItemModel from "../models/item.model";

const router = express.Router();

router.get("", commonController(ItemModel).get);
router.post("", commonController(ItemModel).post);
router.put("", commonController(ItemModel).update);
router.delete("", commonController(ItemModel).deleteOne);

export default router;