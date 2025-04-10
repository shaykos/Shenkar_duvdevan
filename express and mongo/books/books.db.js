
export async function getAllBooksFromDatabase() {
    // Simulate fetching from a database
    return [
        { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian', publishedYear: 1949 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', publishedYear: 1960 },
        { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', publishedYear: 1925 },
    ];
}