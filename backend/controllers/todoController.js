const Todo = require("/models/todoModel");


exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = new Todo({
      title: title,
      description: description,
    });
    await todo.save();

    res.status(201).json({
      success: true,
      data: todo,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.completetodo = async(req,res) =>{
    const{id}=req.params

    try{
        const todo= await Todo.findById(id)
        todo.completetodo=true,
        todo.save()

        res.status(201).json({
            success: true,
            data: todo,
          });
        
    }
    catch (err) {
        res.status(500).json({
          success: false,
          message: err.message,
        });
      }

}

exports.getAllTodo = async(req,res)=>{

    try{
        const todo=await Todo.find({completetodo:false})
        
        res.status(201).json({
            success: true,
            data: todo,
          });

    }
    catch (err) {
        res.status(500).json({
          success: false,
          message: err.message,
        });
      }
}


