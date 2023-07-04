import { MongoClient } from 'mongodb';


async function handler(req, res) {

    const { id } = req.query;

    let client

    async function handleConnect() {
        const client = await MongoClient.connect(
            'mongodb+srv://aref:RCXSDdKgq8xkTf8e@cluster0.l0ufr9q.mongodb.net/?retryWrites=true&w=majority'
        );
        return client

    }

    async function updateOne(client) {
        const db = client.db('myFirstProject')
        const category = await db.collection('category').updateOne(
            { _id: id }, // Assuming id is the MongoDB document ID
            { $set: { content } }
          );
        return category

    }


    if (req.method === 'POST') {

        const { children } = req.body;


        try {
            client = await handleConnect()
        } catch (error) {
            res.status(500).json({ message: 'connection to database failed' })
            return
        }


        try {
            const category = await updateOne(client)

            res.status(200).json({ messeage: 'category update' })

        } catch (error) {
            res.status(500).json({ message: 'update failed' })

        }

        // if want to sort this respons see video 9 

        client.close()

    }






}

export default handler