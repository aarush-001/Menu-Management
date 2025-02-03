const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  taxApplicable: { type: Boolean },
  tax: { type: Number },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
});

module.exports = mongoose.model("Item", itemSchema);
