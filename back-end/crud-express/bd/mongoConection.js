let mongosse = require('mongoose');

let mongoDB_URL = 'mongodb://127.0.0.1:27017/university_ufc';
mongosse.connect(mongoDB_URL, { useNewUrlParser: true });

let dbConnection = mongosse.connection;

dbConnection.on('connected', () => {
  console.log('Mongoose Connected to '+ mongoDB_URL);
});
dbConnection.on('disconnected', () => {
  console.log('Mongoose Disconnected from '+ mongoDB_URL);
});
dbConnection.on('error', (error) => {
  console.log('Mongoose Error: '+ error);
});
