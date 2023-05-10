import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://aref:j7Fb3Es7IAQu0H14@cluster0.l0ufr9q.mongodb.net/?retryWrites=true&w=majority"
    
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db("email");

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();

  return documents;
}