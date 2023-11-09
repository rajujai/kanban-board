"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: { type: mongoose_1.Types.ObjectId, required: true },
    boardId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, required: true },
    dueDate: { type: Number, required: true }
});
exports.default = (0, mongoose_1.model)("Item", schema);
