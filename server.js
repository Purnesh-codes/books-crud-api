import express from 'express';
import { Router } from 'express';
import { logger } from './middlewares/logger';

const PORT = process.env.PORT || 8080;

const app = express();

//Express middleware to do parsing of data into json
app.use(express.json());

//A basic "Server level" logger middleware
app.use(logger);

//API routes
app.use('/api/books', bookRoutes);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
