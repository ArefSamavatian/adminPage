import { MongoClient } from 'mongodb';

async function handler(req, res) {

    // const dummy = [
    //     { _id: "MongoDB", parent: "Databases" },
    //     { _id: "dbm", parent: "Databases" },
    //     { _id: "Databases", parent: "Programming" },
    //     { _id: "Languages", parent: "Programming" },
    //     { _id: "Programming", parent: "Books" },
    //     { _id: "Books", parent: null }
    // ]



    let client

    async function handleConnect() {
        const client = await MongoClient.connect(
            'mongodb+srv://aref:RCXSDdKgq8xkTf8e@cluster0.l0ufr9q.mongodb.net/?retryWrites=true&w=majority'
        );
        return client

    }
    async function getAll(client) {
        const db = client.db('myFirstProject');
        const category = await db.collection('category').find({}, { projection: { name: 1, _id: 1, parent: 1 } }).toArray();
        return category;
    }




    if (req.method === 'GET') {

        try {
            client = await handleConnect();
        } catch (error) {
            res.status(500).json({ message: 'connection to database failed' });
            return;
        }

        try {
            const category = await getAll(client);

            function buildTree(data, root) {
                const tree = [];
                data
                    .filter(item => item.parent === root)
                    .forEach(item => {
                        const children = buildTree(data, item._id.toString());
                        const node = { ...item, children };
                        tree.push(node);
                    });
                return tree;
            }

            const treeData = buildTree(category,'main')
            console.log(treeData);

            res.status(200).json({ massage: 'category get', treeData: treeData }); // Include the tree structure in the response

        } catch (error) {
            res.status(500).json({ message: 'inserting data failed' });
        }

        client.close();
    }
}

export default handler;
