const express = require('express');
const cors = require('cors');

const app = express();
app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .get('/', (req, res) => {
        res.status(200).json({ ok: true, message: 'Welcome to my automated pipeline nodejs App!!!!!' })
    })
    .listen(3000, () => {
        console.log('Server listening on port 3000!');
    });