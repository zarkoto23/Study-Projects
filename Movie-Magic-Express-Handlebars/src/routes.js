 import homeController from './controllers/homeController.js'
 import { Router } from 'express'

 const router=Router()

router.use(homeController)



router.get('*',(req, res)=>{
    res.render('404')
})





 export default router

