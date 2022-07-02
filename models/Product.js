const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String },
    category: { type: String, required: true },
    img: { type: String, required: true },
    size: { type: Array },
    color: { type: Array },
    rating: { type: Object },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Product", ProductSchema);
