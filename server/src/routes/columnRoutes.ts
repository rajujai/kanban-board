const router = require("express").Router();
const routes = require("./commonRoutes");
const ColumnModel = require("../models/column.model");

router.get("", () => routes(ColumnModel).get);
router.post("", () => routes(ColumnModel).post);
router.put("", () => routes(ColumnModel).update);
router.delete("", () => routes(ColumnModel).deleteOne);

export default router;