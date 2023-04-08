import { Schema } from "mongoose";
import mongoose from "mongoose";

// Local onde montamos o modelo de dados desejado

export const ProductSchema = new Schema({
  id: { type: Number, required: true },
  description: { type: String },
  img: { type: String },
  price: { type: Number },
  quantity: { type: Number },
});

export const Product = mongoose.model("Product", ProductSchema);
