import express from 'express';
const router= express.Router();
import Items from '../models/Items.js';
import cors from 'cors';
router.use(cors());
import { updateItems, getItems, getItemsById, addItems, deleteItem} from "../controllers/items.js";

router.get("/getItems", getItems);

router.get("/getItemsById/:id", getItemsById);
router.put("/updateItems/:id", updateItems);
router.post("/addItems", addItems);
router.delete("/deleteItem/:id", deleteItem);

 
export default router;