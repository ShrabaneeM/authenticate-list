'use strict';

const express = require("express");
const app = express();
const bodyparser = require('body-parser');
const routes = require('./routes')

const port = 3000;

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/', routes);

app.listen(port, () => {
    console.log(`started authentication service on port ${port}`);
});