const express=require("express")
const router=express.Router()

const {createTask,getTask,getTaskById}=require('../controllers/taskControllers')
const {protect}=require('../middleware/authmiddleware')

router.post('/create',protect,createTask)
router.get('/get',protect,getTask)
router.get('/getTaskById/:id',protect,getTaskById)

module.exports=router