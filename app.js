const express = require('express');
const app = express();

app.use(express.json());

const store = new Map();

app.get('/', (req, res) =>
    res.json('Hello World!')
)

app.post('/:key', (req, res) => {
    store.set(req.params.key, req.body);
    res.json("OK");

})

app.get('/:key', (req, res) => {
    const value = store.get(req.params.key);
    res.json(value);
});


module.exports = app

