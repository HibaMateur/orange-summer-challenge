import express from "express";
const router = express.Router();
import User from '../models/user.js';

import { signin,deleteUser,signup, upload,uploadImage, activateAccount, updateProfile,getUsers, updateUserById } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);


router.get("/getUsers", getUsers);
router.delete("/deleteUser/:id", deleteUser);
router.post("/updateUser/:id", updateUserById);

router.post('/uploadProfileImg',uploadImage,upload)
router.post('/activateaccount',activateAccount)
router.post('/updateProfile',updateProfile)




router.get('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        
        console.log(user)
        res.json(user)

    }catch(err){
        res.send('Error '+ err)
    }
})


router.put('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(req.body.firstname)
        user.firstname =req.body.firstname
        if(req.body.lastname)
        user.lastname =req.body.lastname
       
        

        await user.save()
        res.json(user)

    }catch(err){
        res.send('Error '+ err)
    }
})
router.post('/',async(req,res)=>{
    const p = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
    
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
            const p1 = await User.findByIdAndDelete(req.params.id)
            res.json(p1)
    
        }catch(err){
            res.send('Error '+ err)
        }
    });

export default router;