import express from "express";
import commonController from "./common.controller";
import BoardModel from "../models/board.model";

const router = express.Router();

router.get("", commonController(BoardModel).get);
router.post("", commonController(BoardModel).post);
router.put("", commonController(BoardModel).update);
router.delete("", commonController(BoardModel).deleteOne);

export default router;