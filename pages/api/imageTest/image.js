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
        const db = client.db('imageTest')
        await db.collection('image').insertOne(req.body.image)
    }

    async function getAll(client) {
        const db = client.db('imageTest')
        const image = await db.collection('image').find().toArray()
        return image

    }

    if (req.method === 'POST') {

        if (req.body.image === '') {
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

            await insertOne(client, req.body.image)
            client.close()

        } catch (error) {

            res.status(500).json({ message: 'inserting data failed' })
            return
        }

        res.status(201).json({ messeage: 'image fetch', catgory: req.body.image })

    }


    if (req.method === 'GET') {

        console.log('servver request')


        try {
            client = await handleConnect()
        } catch (error) {
            res.status(500).json({ message: 'connection to database failed' })
            return
        }


        try {
            const image = await getAll(client)

            res.status(200).json({ messeage: 'image get', image: image })

        } catch (error) {
            res.status(500).json({ message: 'inserting data failed' })

        }

        // if want to sort this respons see video 9 

        client.close()

    }






}

export default handler