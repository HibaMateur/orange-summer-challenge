import express from 'express';
const router= express.Router();
import Items from '../models/Items.js';
import cors from 'cors';
router.use(cors());
import { getItems, getItemsById} from "../controllers/items.js";

router.get("/getItems", getItems);

router.get("/getItems/:id", getItemsById);
router.post('/',async(req,res)=>{
    const p = new Items({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
    
    });
    try {
        const p1 = await p.save();
        res.json(p1);
      } catch (err) {
        res.send("Error");
      }
    });
    router.delete("/:id", async(req,res)=>{
        try{
            const p1 = await Items.findByIdAndDelete(req.params.id)
            res.json(p1)
    
        }catch(err){
            res.send('Error '+ err)
        }
    });
    router.get('/:id', async(req,res)=>{
        try{
            const profff = await Items.findById(req.params.id)
            res.json(profff)
    
        }catch(err){
            res.send('Error '+ err)
        }
    })
    router.put('/:id', async(req,res)=>{
        try{
            const ite = await Items.findById(req.params.id)
            if(req.body.name)
            ite.name =req.body.name
            if(req.body.description)
            ite.description =req.body.description
            if(req.body.price)
            ite.price =req.body.price
            if(req.body.stock)
            ite.stock =req.body.stock
            
    
            await ite.save()
            res.json(ite)
    
        }catch(err){
            res.send('Error '+ err)
        }
    })
export default router;