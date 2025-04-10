import { MongoClient, ObjectId } from 'mongodb';

export async function getAllBooksFromDatabase() {
    let client = null;
    try {
        console.log("opening connection to database");
        client = await MongoClient.connect(process.env.CONNECTION_STRING);
        let db = client.db(process.env.DB_NAME);
        return await db.collection('Books').find({}).toArray();
    } catch (error) {
        console.error("Error fetching books from database:", error);
        throw error;
    }
    finally {
        if (client)
            client.close();
        console.log("Connection closed");
    }
}