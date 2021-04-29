const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const layout = require('./layout');
const { db } = require('./models');


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send(layout(""))
})

db.authenticate().then(() => {
    console.log('connected to the databse')
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});