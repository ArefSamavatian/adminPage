import { connectDatabase, insertDocument } from '../../helpers/db-util';

import { MongoClient } from "mongodb"

async function handler(req, res) {
    if (req.method === 'POST') {



        const useremail = req.body.email;
        console.log("annnnnn", useremail)
        res.status(201).json({ message: "kiiiir" })

       const client = await MongoClient.connect("mongodb+srv://aref:j7Fb3Es7IAQu0H14@cluster0.l0ufr9q.mongodb.net/?retryWrites=true&w=majority"
        )
         const db=  client.db ('email')
         await db.collection('my email').insertOne({email:useremail})
         client.close()
     


        // let client;

        // try {
        //   client = await connectDatabase();
        // } catch (error) {
        //   res.status(500).json({ message: 'Connecting to the database failed!' });
        //   return;
        // }

        // try {
        //   await insertDocument(client, 'newsletter', { email: userEmail });
        //   client.close();
        // } catch (error) {
        //   res.status(500).json({ message: 'Inserting data failed!' });
        //   return;
        // }

        // res.status(201).json({ message: 'Signed up!' });
    }
}

export default handler;