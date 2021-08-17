import { Schema, model, Document } from 'mongoose';

class TodoModel {
  _id: string;
  name: string;
  complete: boolean;

  constructor(_id: string, name: string, complete: boolean) {
    this._id = _id;
    this.name = name;
    this.complete = complete;
  }
}

const TodoSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

export interface ITodo extends TodoModel, Document {
  _id: string;
  name: string;
  complete: boolean;
}

export const Todo = model<ITodo>('Todo', TodoSchema);
