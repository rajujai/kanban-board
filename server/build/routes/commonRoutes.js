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
Object.defineProperty(exports, "__esModule", { value: true });
const post = (model) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield model.create(req.body);
        return res.status(201).send(item);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});
const get = (model) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("hii");
        const items = yield model.find().lean().exec();
        return res.status(200).send(items);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});
const getOne = (model) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield model.findById(req.params.id).lean().exec();
        return res.status(200).send(item);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});
const update = (model) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield model.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
        return res.status(205).send(item);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});
const deleteOne = (model) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield model.findByIdAndDelete(req.params.id).lean();
        return res.status(205).send(item);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});
module.exports = (model) => ({
    post: post(model),
    get: get(model),
    getOne: getOne(model),
    update: update(model),
    deleteOne: deleteOne(model)
});
