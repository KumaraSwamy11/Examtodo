const express = require("express");

const router = express.Router();

const todoController = require("../controllers/todoController");

router.post("/create", todoController.createTodo);
router.get("/fetch", todoController.getAllTodo);
router.put("/completed/:id,",todoController.completetodo)
