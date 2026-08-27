// Temporary in memory database of books
let books = [
  { id: 1, title: 'Atomic Habits' },
  { id: 2, title: 'The Psychology of Money' },
  { id: 3, title: 'Ikigai' },
  { id: 4, title: 'Silent Patient' },
];

// @desc    Get all books
// @route   GET /api/books
export const getBooks = (req, res) => {
  res.json(books);
};

// @desc    Get a single book by ID
// @route   GET /api/books/:id
export const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);

  if (!book) {
    return res.status(404).json({ msg: 'book not found' });
  }
  res.status(200).json(book);
};

// @desc    Create a book
// @route   GET /api/books
export const createBook = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ msg: 'Title is required' });
  }

  const newBook = {
    id: books.length + 1,
    title,
  };

  books.push(newBook);
  res.status(201).json(newBook);
};

// @desc    Update a book
// @route   GET /api/books/:id
export const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID must be a valid number' });
  }

  if (index === -1) {
    return res.status(404).json({ error: `Book with ID ${id} not found` });
  }

  const { title } = req.body;

  const updatedBook = books.find((book) => book.id === id);

  if (updatedBook) {
    updatedBook.title = title;
  }

  res.status(200).json(books);
};

// @desc    delete a book
// @route   GET /api/books/:id
export const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID must be a valid number' });
  }

  if (index === -1) {
    return res.status(404).json({ error: `Book with ID ${id} not found` });
  }

  books = books.filter((book) => book.id !== id);

  res.status(200).json({ msg: `book ${id} deleted` });
};
