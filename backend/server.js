// Importing dependencies.
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

// Setting up Instances.
const app = express();
const router = express.Router();


const API_PORT = process.env.API_PORT || 3001;

// Configuring API to use BodyParser and look for JSON Data.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Set route path, initialize API.
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Use router configuration when API is called.
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));