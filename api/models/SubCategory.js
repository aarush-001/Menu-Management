const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  taxApplicable: { type: Boolean },
  tax: { type: Number },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
