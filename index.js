const express = require('express');
const { startConnection, listDatabases } = require('./db/connection');
const cors = require('cors');
const router = require('./routes/user/userRoutes');

const corsOptions = {
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
startConnection();
// listDatabases();

app.use('/api', router)

app.listen(3000, () => {
    console.log('server started on port 3000');
});
