import {Router}  from 'express'


const routes=Router()

routes.get('/',(req, res)=>{ 
    res.render('home')
})

routes.get('/about',(req, res)=>{
    res.render('about')
})

export default routes
