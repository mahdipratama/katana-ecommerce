import mongoose from 'mongoose';

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'katana-ecommerce',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if ((connection, mongoose.connection.readyState === 1)) {
      console.log('MongoDB connected');
    }
  } catch (err) {
    return Promise.reject(err);
  }
};
