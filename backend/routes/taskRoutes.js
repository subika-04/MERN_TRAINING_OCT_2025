const express=require("express")
const router=express.Router()

const {createTask,getTask,getTaskById,updateTaskById,updatePatchTaskById,deleteTaskById}=require('../controllers/taskControllers')
const {protect}=require('../middleware/authmiddleware')

router.post('/create',protect,createTask)
router.get('/get',protect,getTask)
router.get('/getTaskById/:id',protect,getTaskById)
router.put('/updateTaskById/:id',protect,updateTaskById)
router.patch('/updatePatchTaskById/:id',protect,updatePatchTaskById)
router.delete('/deleteTaskById/:id',protect,deleteTaskById)

module.exports=router