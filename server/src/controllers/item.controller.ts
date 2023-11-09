const express = require("express");
const commonController = require("./common.controller.ts");
const ItemModel = require("../models/item.model.ts");

const router = express.Router();

router.get("", () => commonController(ItemModel).get);
router.post("", () => commonController(ItemModel).post);
router.put("", () => commonController(ItemModel).update);
router.delete("", () => commonController(ItemModel).deleteOne);

export default router;