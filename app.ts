import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './configs/database';
import todoRoute from './routes/todo.route';

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/todo', todoRoute);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message,
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});
