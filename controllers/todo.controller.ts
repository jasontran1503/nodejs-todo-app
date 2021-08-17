import { Request, Response, NextFunction } from 'express';
import { ITodo, Todo } from '../models/todo.model';

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos: ITodo[] = await Todo.find({});
    if (todos) {
      return res.status(200).json({
        success: true,
        message: 'Thành công.',
        data: todos,
      });
    } else {
      throw new Error('Error.');
    }
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newTodo: ITodo = await Todo.create(req.body);
    return res.status(200).json({
      success: true,
      message: 'Tạo mới thành công.',
      data: newTodo,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todoId = req.query.todoId as string;
    const todoDeleted: ITodo | null = await Todo.findByIdAndDelete(todoId);
    return res.status(200).json({
      success: true,
      message: 'Xóa thành công.',
      data: todoDeleted,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todoId = req.query.todoId as string;
    const todoUpdated: ITodo | null = await Todo.findByIdAndUpdate(
      todoId,
      { name: req.body.name },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: 'Cập nhật thành công.',
      data: todoUpdated,
    });
  } catch (error) {
    next(error);
  }
};

export const completeTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todoId = req.query.todoId as string;
    const todoCompleteStatus: ITodo | null = await Todo.findByIdAndUpdate(
      todoId,
      { complete: req.body.complete },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: 'Cập nhật thành công.',
      data: todoCompleteStatus,
    });
  } catch (error) {
    next(error);
  }
};
