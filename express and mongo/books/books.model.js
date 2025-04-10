import { getAllBooksFromDatabase } from './books.db.js';

export default class Book {
    constructor(title, author, genre, publishedYear) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.publishedYear = publishedYear;
    }

    static async findAll() {
        try {
            return await getAllBooksFromDatabase(); // Simulate fetching from a database 
        } catch (error) {
            throw new Error('An error occurred while fetching books.');
        }
    }
}