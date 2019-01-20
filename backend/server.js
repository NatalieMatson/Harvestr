// Setting up dependencies.
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';

// Creating instances.
const app = express();
const router = express.Router();

// Setting port to 3001.
const API_PORT = process.env.API_PORT || 3001;

// Setting URL to mLab - found in a secrets.js unavailable publicly.
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Configuring API to use bodyParser and look for JSON data.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Setting route path and initializing API.
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});