const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const dotenv  = require('dotenv');
const routeUrl = require('./routes');
const cors = require('cors');

dotenv.config();

// mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true, useUnifiedTopology: true });
// const con = mongoose.connection

// con.on('open', function () {
//     console.log('MongoDB connected...');
    
// })

app.use(express.json());
app.use(cors());
app.use('/app', routeUrl);

app.listen(4000, () => console.log('server is running on '));