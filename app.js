const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/Error');
const sequelize=require('./util/database');
const app = express();

app.use(cors());

const mainRoute=require('./routes/Main');
 
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoute);

app.use(errorController.get404);

sequelize.sync()
    .then(()=>app.listen(3100))
    .catch(err=>console.log(err)); 