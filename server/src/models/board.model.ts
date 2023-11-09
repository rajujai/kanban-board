import { InferSchemaType, Schema, Types, model } from "mongoose";

const schema = new Schema({
    id: { type: Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false }
});

type Board = InferSchemaType<typeof schema>;
export default model("Board", schema);