import bcrypt from "bcryptjs";
import { getAll, createUser, getUserByEmail } from "./users.db.js";

export default class User {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = bcrypt.hashSync(password, 15); // Hash the password before saving
    }

    static async getAllUsers() {
        try {
            return await getAll();
        } catch (error) {
            throw new Error('An error occurred while fetching users.');
        }
    }

    static async login(email, password) {
        try {
            let user = await getUserByEmail(email);
            if (!user || bcrypt.compareSync(password, user.password) === false) {
                return null; 
            }
            delete user.password; // Remove password from user object before returning
            return user; // Return the user object without the password
        } catch (error) {
            throw new Error('An error occurred while fetching the user.');
        }
    }

    async save() {
        try {
            return await createUser(this);
        }
        catch (error) {
            throw new Error('An error occurred while saving the user.');
        }
    }
}