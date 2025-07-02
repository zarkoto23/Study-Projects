import {Router}  from 'express'
import movies from '../movies.js'

const routes=Router()

routes.get('/',(req, res)=>{ 
    res.render('home',{movies})
})

routes.get('/about',(req, res)=>{
    res.render('about')
})



export default routes
