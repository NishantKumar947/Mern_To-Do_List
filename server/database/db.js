import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

if (!USERNAME || !PASSWORD) {
  throw new Error('DB_USERNAME and DB_PASSWORD environment variables are required');
}

const Connection = () => {
  try {
    const MONGODB_URI =  `mongodb+srv://${USERNAME}:${PASSWORD}@to-do.x52xa.mongodb.net/?retryWrites=true&w=majority&appName=to-do`

    mongoose.set('strictQuery', false); 

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
      console.log('Database connected Successfully');
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
      console.log('Error while connecting with the database ', error.message);
    });
  } catch (error) {
    console.log('Error connecting to database:', error.message);}
   
};

export default Connection;