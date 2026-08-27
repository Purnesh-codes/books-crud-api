import express from 'express';
import booksRouter from './routes/booksRoutes.js';
import { logger } from './middlewares/logger.js';

const PORT = process.env.PORT || 8080;

const app = express();

//Express middleware to do parsing of data into json
app.use(express.json());

//A basic "Server level" logger middleware
app.use(logger);

//API routes
app.use('/api/books', booksRouter);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
