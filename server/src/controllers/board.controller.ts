const express = require("express");
const commonController = require("./common.controller");
const BoardModel = require("../models/board.model");

const router = express.Router();

router.get("", () => commonController(BoardModel).get);
router.post("", () => commonController(BoardModel).post);
router.put("", () => commonController(BoardModel).update);
router.delete("", () => commonController(BoardModel).deleteOne);

export default router;