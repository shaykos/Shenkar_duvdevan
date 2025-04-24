import User from './users.model.js';

export async function getAllUsers(req, res) {
    try {
        const users = await User.getAllUsers();
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching users.' });
    }
}

export async function addUser(req, res) {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).json({ message: 'User created successfully', user: result });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while creating the user.' });
    }
}