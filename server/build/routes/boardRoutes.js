"use strict";
const router = require("express").Router();
const routes = require("./columnRoutes");
const BoardModel = require("../models/board.model");
router.get("", () => {
    console.log("heythere");
    routes(BoardModel).get;
});
router.post("", routes(BoardModel).post);
router.put("", routes(BoardModel).update);
router.delete("", routes(BoardModel).deleteOne);
module.exports = router;
