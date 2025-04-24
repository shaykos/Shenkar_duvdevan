import {getAllUsers, addUser} from './users.controller.js';
import {Router} from 'express';

const usersRouter = Router();


usersRouter
    .get('/', getAllUsers)
    // .get('/:id', getBookById)
     .post('/', addUser)
    // .put('/:id', updateBook)
    // .delete('/:id', deleteBook);

// Export the router
export default usersRouter;