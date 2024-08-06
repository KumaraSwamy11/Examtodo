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
