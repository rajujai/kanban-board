const express = require("express");
const commonController = require("./common.controller");
const ColumnModel = require("../models/column.model");

const router = express.Router();

router.get("", () => commonController(ColumnModel).get);
router.post("", () => commonController(ColumnModel).post);
router.put("", () => commonController(ColumnModel).update);
router.delete("", () => commonController(ColumnModel).deleteOne);

export default router;