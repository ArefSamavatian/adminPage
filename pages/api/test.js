import { MongoClient } from 'mongodb';


  async function handler(req, res) {

    let client

    async function handleConnect() {
        const client = await MongoClient.connect(
            'mongodb+srv://aref:RCXSDdKgq8xkTf8e@cluster0.l0ufr9q.mongodb.net/?retryWrites=true&w=majority'
        );
        return client

    }

    async function insertOne(client, object) {
        const db = client.db('myFirstProject')
        await db.collection('test').insertOne(req.body.test)
    }

    async function getAll(client) {
        const db = client.db('myFirstProject')
        const test = await db.collection('test').find().toArray()
        return test

    }

    if (req.method === 'POST') {

        if (req.body.test.name === '') {
            res.status(442).json({ message: 'please fill name' })
            return;
        }

          


        try {
            client = await handleConnect()
        } catch (error) {
            res.status(500).json({ message: 'connection to database failed' })
            return
        }


        try {

            await insertOne(client, req.body.test)
            client.close()

        } catch (error) {

            res.status(500).json({ message: 'inserting data failed' })
            return
        }

        res.status(201).json({ messeage: 'test fetch', catgory: req.body.test })

    }


    if (req.method === 'GET') {

   


        try {
            client = await handleConnect()
        } catch (error) {
            res.status(500).json({ message: 'connection to database failed' })
            return
        }


        try {
            const test = await getAll(client)

            res.status(200).json({ messeage: 'test get', test: test })
            
        } catch (error) {
            res.status(500).json({ message: 'inserting data failed' })
           
        }

        // if want to sort this respons see video 9 

        client.close()

    }






}

export default handler