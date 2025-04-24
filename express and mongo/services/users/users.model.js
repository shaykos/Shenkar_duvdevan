import { getAll, createUser } from "./users.db.js";

export default class User {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static async getAllUsers() {
        try {
            return await getAll();
        } catch (error) {
            throw new Error('An error occurred while fetching users.');
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