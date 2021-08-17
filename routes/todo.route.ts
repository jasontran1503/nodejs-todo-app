import express from 'express';
import * as TodoController from '../controllers/todo.controller';
const router = express.Router();

router.get('/get-all', TodoController.getTodos);
router.post('/new-todo', TodoController.createTodo);
router.put('/update-todo', TodoController.updateTodo);
router.delete('/delete-todo', TodoController.deleteTodo);
router.put('/complete-todo', TodoController.completeTodo);

export = router;
