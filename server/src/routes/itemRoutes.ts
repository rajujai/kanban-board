const router = require("express").Router();
const routes = require("./commonRoutes");
const ItemModel = require("../models/item.model.ts");

router.get("", () => routes(ItemModel).get);
router.post("", () => routes(ItemModel).post);
router.put("", () => routes(ItemModel).update);
router.delete("", () => routes(ItemModel).deleteOne);

export default router;