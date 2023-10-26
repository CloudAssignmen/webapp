// Loading environment variables from .env file
require('dotenv').config();
const path = require('path');
const app = require('./app');
// Importing Sequelize database connection (instance)
const { db } = require('./models/model');

const PORT = process.env.PORT || 8080;

let filePath = path.join(__dirname, '/opt/users.csv');
console.log('ENV_TYPE: ', process.env.ENV_TYPE);




db.sync({ force: false, alter: true })
    .then(() => {
        
        app.listen(PORT, () => {
            console.log(`Web Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
        process.exit(1);
    });