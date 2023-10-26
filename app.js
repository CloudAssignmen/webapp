// Loading environment variables from .env file
require('dotenv').config();
const processCsv = require('./helpers/userImporter');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const { healthRoutes, assignmentRoutes } = require('./routes');


const app = express();

// body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(healthRoutes);
app.use('/v1/assignments', assignmentRoutes);

if (process.env.ENV_TYPE === 'DEBIAN_VM') {
    filePath = '/opt/users.csv'
}
else if (process.env.ENV_TYPE === 'GITHUB_CI') {
    filePath = path.join(__dirname, '/opt/users.csv');
}

processCsv(filePath);

module.exports = app;
