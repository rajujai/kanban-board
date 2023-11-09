import { Request, Response } from "express";

const post = (model: any) => async (req: Request, res: Response) => {
    try {
        const item = await model.create(req.body)
        return res.status(201).send(item);
    } catch (err: any) {
        return res.status(400).send(err.message)
    }
};
const get = (model: any) => async (req: Request, res: Response) => {
    try {
        console.log("hii");
        
        const items = await model.find().lean().exec();
        return res.status(200).send(items);
    } catch (err: any) {
        return res.status(400).send(err.message)
    }
};
const getOne = (model: any) => async (req: Request, res: Response) => {
    try {
        const item = await model.findById(req.params.id).lean().exec();
        return res.status(200).send(item);
    } catch (err: any) {
        return res.status(400).send(err.message);
    }
};
const update = (model: any) => async (req: Request, res: Response) => {
    try {
        const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean()
        return res.status(205).send(item);
    } catch (err: any) {
        return res.status(400).send(err.message);
    }
};
const deleteOne = (model: any) => async (req: Request, res: Response) => {
    try {
        const item = await model.findByIdAndDelete(req.params.id).lean()
        return res.status(205).send(item);
    } catch (err: any) {
        return res.status(400).send(err.message);
    }
};

module.exports = (model: any) => ({
    post: post(model),
    get: get(model),
    getOne: getOne(model),
    update: update(model),
    deleteOne: deleteOne(model)
})