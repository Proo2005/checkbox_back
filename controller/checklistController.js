import ChecklistItem from "../models/ChecklistItem.js";

// GET all items for a user
export const getItems = async (req, res) => {
  try {
    const userId = req.params.userId;
    const items = await ChecklistItem.find({ user: userId }).sort({ createdAt: 1 });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ADD new item
export const addItem = async (req, res) => {
  try {
    const { userId, name } = req.body;
    if (!name) return res.status(400).json({ message: "Item name required" });

    const item = await ChecklistItem.create({ user: userId, name });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE item
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await ChecklistItem.findByIdAndDelete(id);
    res.status(200).json({ message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// TOGGLE completed
export const toggleItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ChecklistItem.findById(id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.completed = !item.completed;
    await item.save();

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
