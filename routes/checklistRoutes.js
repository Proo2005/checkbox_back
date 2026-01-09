import express from "express";
import { getItems, addItem, deleteItem, toggleItem } from "../controller/checklistController.js";

const router = express.Router();

router.get("/:userId", getItems);
router.post("/", addItem);
router.delete("/:id", deleteItem);
router.patch("/toggle/:id", toggleItem);

export default router;
