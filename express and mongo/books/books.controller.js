import Book from './books.model.js';

export async function getBooks(req, res) {

    try {
        const books = await Book.findAll();
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while fetching books.' });
    }
}