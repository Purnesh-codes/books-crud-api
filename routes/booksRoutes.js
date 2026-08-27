import express from 'express';
import {
  getBooks,
  getBookById,
  createBook,
  deleteBook,
  updateBook,
} from '../controllers/booksController.js';
const router = express.Router();

router.get('/', getBooks);

router.post('/', createBook);

router.get('/:id', getBookById);

router.delete('/:id', deleteBook);

router.put('/:id', updateBook);

export default router;
