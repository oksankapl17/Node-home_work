const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
  extname: '.hbs',
  defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

let {user, house} = require('./controllers');
let {user: userMiddleware, house: houseMiddleware} = require('./middleware');
let {userValidator} = require('./validators');
let {provider} = require('./dataBase');

app.get('/', (req, res) => {
  res.render('main', {layout: false})
});
app.get('/login', (req, res) => {
  res.render('login', {layout: false})
});
app.get('/register', (req, res) => {
  res.render('register', {layout: false})
});
app.get('/house', (req, res) => {
  res.render('house', {layout: false})
});

app.post('/auth/houses', houseMiddleware.findHouseLoginMiddleware, house.loginHouse);
app.post('/auth/users', userMiddleware.findUserLoginMiddleware, user.loginUser);

app.post('/users', userMiddleware.checkUserValidityMiddleware, user.createUser);
app.get('/users', user.findAll);
app.get('/users/:id', userMiddleware.isUserPresentMiddleware, user.getById);
app.patch('/users/:id', userMiddleware.checkUserValidityMiddleware, user.updateUser);

app.post('/houses', houseMiddleware.checkHouseValidityMiddleware, house.createHouse);
app.get('/houses', house.findAll);
app.get('/houses/:id', houseMiddleware.isHousePresentMiddleware, house.getById);
app.patch('/houses/:id', houseMiddleware.checkHouseValidityMiddleware, house.updateHouse);

app.listen(3000, () => {
});
