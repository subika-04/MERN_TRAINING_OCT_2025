
//const Task=require("../models/Task")

// exports.createTask = async (req, res) => {
//   try {
//     const { title, description, status,user } = req.body;

//     const task = await Task.create({
//       title,
//       description,
//       status,
//       user
//     });

//     res.status(201).json({ message: "Task added successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
//task.ja kku inga function create pantrom
const Task = require('../models/Task')


exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || "pending",
      user: req.user.id
    })


    res.status(201).json({
      msg: "Task created successfully",
      task
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

exports.getTask=async (req,res)=>{
  try{
    const tasks=await Task.find({user:req.user.id})
    res.status(200).json({"Tasks" :tasks})
  }
  catch(error)
  {
    res.status(500).json(error)
  }
}

exports.getTaskById=async (req,res)=>{
  try
  {
    const task=await Task.findOne({
      _id:req.params.id,
      user:req.user.id
  })
   res.json(task)
  }
  catch(error)
  {
     res.status(500).json(error)
  }

}

