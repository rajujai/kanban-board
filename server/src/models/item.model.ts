import { InferSchemaType, Schema, Types, model } from "mongoose";

const schema = new Schema({
    id: { type: Types.ObjectId, required: true },
    boardId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, required: true }, //column name
    dueDate: { type: Number, required: true }
});


type Item = InferSchemaType<typeof schema>;
export default model("Item", schema);