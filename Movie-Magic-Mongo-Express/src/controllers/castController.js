import { Router } from "express";
import castService from "../services/castService.js";


const castController=Router()

castController.get('/create', (req, res)=>{
    res.render('cast/create')
})

castController.post('/create',async(req, res)=>{
    const castData=req.body
    console.log(castData);
    
    await castService.create(castData)
    res.redirect('/')
})



export default castController