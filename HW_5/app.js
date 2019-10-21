const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();
const db = require('./dataBase').getInstance();

db.setModels();

global.appRoot = __dirname;

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
  extname: '.hbs',
  defaultLayout: null,
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const { userRouter, houseRouter, authRouter } = require('./router');

app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/houses', houseRouter);

app.listen(3000, () => {
  console.log('Listening.....');
});
