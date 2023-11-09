import { InferSchemaType, Schema, Types, model } from "mongoose";

const schema = new Schema({
    id: { type: Types.ObjectId, required: true },
    boardId: { type: String, required: true },
    name: { type: String, required: true }
});

type Column = InferSchemaType<typeof schema>;
export default model("Column", schema);