/* eslint-disable import/extensions */
import express from 'express';
import path from 'path';
import useMiddleware from './middleware/index.js';
import errorHandlers from './middleware/error-handlers.js';
import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import courseRouter from './routes/course.js';
import serviceWorkerRoute from './routes/serviceWorker.js';
import programRouter from './routes/program.js';

const app = express();

app.use(express.static(path.resolve('../client/build/')));

useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/api', indexRouter);
app.use('/auth', authRouter);
app.use('/course', courseRouter);
app.use(serviceWorkerRoute);
app.use('/program', programRouter);
// Обработка несуществующих запросов
errorHandlers(app);

// Для того чтобы работали все роуты в React приложении
app.get('*', (req, res) => {
  res.sendFile(path.resolve('../client/build/index.html'));
});

export default app;
