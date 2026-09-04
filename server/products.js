import { Router } from "express";
import product from "./db.js";

//create a temporary router
const router=Router();

//create
router.get("/",async(req,res)=>{
    try{
    const products=await product.find();
    res.json(products);
    }catch(error){
        res.status(500).send("error");
    }
})

//Read
router.post("/", async(req,res)=>{
 try{
    const np=new product(req.body);
    np.save();
    res.json(np);
}catch(error){
        res.status(500).send("error");
    }
})

//Update
router.put("/:id", async(req,res)=>{
 try{
    const p = await product.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(p);
}catch(error){
        res.status(500).send("error");
    }
})

//Delete
router.delete("/:id", async(req,res)=>{
    try{
   const p = await product.findByIdAndDelete(req.params.id);
   res.json(p);
}catch(error){
        res.status(500).send("error");
    }
})

export default router;