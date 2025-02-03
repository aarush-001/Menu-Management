const express = require("express");
const router = express.Router();
const SubCategory = require("../models/SubCategory");
const Category = require("../models/Category");

//  Create Sub-Category (Linked to a Category)
router.post("/:categoryId", async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (!category) return res.status(404).json({ message: "Category not found" });

    const subCategory = new SubCategory({ ...req.body, categoryId: req.params.categoryId });
    await subCategory.save();
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//  Get All Sub-Categories
router.get("/", async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Get Sub-Categories by Category ID
router.get("/category/:categoryId", async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ categoryId: req.params.categoryId });
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Sub-Category by ID
router.get("/:id", async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory) return res.status(404).json({ message: "SubCategory not found" });
    res.json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Sub-Category by Name
router.get("/name/:name", async (req, res) => {
  try {
    const subCategory = await SubCategory.findOne({ name: { $regex: new RegExp("^" + req.params.name + "$", "i") } });
    if (!subCategory) return res.status(404).json({ message: "SubCategory not found" });
    res.json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//  Edit Sub-Category
router.put("/:id", async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subCategory) return res.status(404).json({ message: "SubCategory not found" });
    res.json(subCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



module.exports = router;
