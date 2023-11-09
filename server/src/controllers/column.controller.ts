import express from "express";
import commonController from "./common.controller";
import ColumnModel from "../models/column.model";

const router = express.Router();

router.get("", commonController(ColumnModel).get);
router.post("", commonController(ColumnModel).post);
router.put("", commonController(ColumnModel).update);
router.delete("", commonController(ColumnModel).deleteOne);

export default router;