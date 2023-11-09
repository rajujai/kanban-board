"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const boardRoutes = require('./routes/boardRoutes');
const columnRoutes = require('./routes/columnRoutes');
const itemRoutes = require('./routes/itemRoutes');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('public'));
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
app.use("/board", boardRoutes);
app.use("/column", columnRoutes);
app.use("/item", itemRoutes);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connect(process.env.MONGO_DB || "");
    console.log(`Server running on port:${PORT}`);
}));
