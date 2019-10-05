
///Продовжуємо писати наш ЛУН з express та hbs )
// Тепер ми знаємо шо таке express та шаблонізатор hbs.
// Відповідно треба зробити попередню дзшку на express.
// І дописати нормальний логін та реєстрацію. НУ і зайнти якусь квартирку
// POST /register має мати данні email, імя, пароль
// Після реєстрації ці данні записуються в масив users, де будуть обєкти
// {
//    id: генеруєте автоматично
//    name: іся з форми, і т.д. з форми
// }
// Врахуйте, шо пісоя перезавнтаження він буде очищатись.
// POST /login
// Так само має форму логіна. мейл, пароль
// Після вводу данних перевірити чи є такий юзер в масиві з юзерами.
// Якшо є, то перенаправити res.redirect на його профайл
// GET /users/:id, де відобразиться його інформація.
// :id характеризує id юзера з масиву юзерів. Інформауція про юзера вже виведена за допомогою параметрів в hbs.
// GET /house/:id
// Відображає на будь яку сторінку з квартиркою.

const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

const users = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));


app.engine('.hbs', expHbs ({
   extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));


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


 app.post('/register', (req, res) => {
   const person = req.body;
   person.person_id = users.length + 1;
   users.push(person);
   res.render('register', {layout: false});
   console.log(person);
 });

 app.post('/login', (req, res) =>{
   const person = req.body;
   const someUser = users.find(value => value.email === person.email && value.password === person.password);
   res.redirect(`/users/${someUser.person_id}`);
 });


 app.get('/users/:id', (req, res) => {
   const searchUser = users.find(value => +req.params.id === value.person_id);
   res.json(searchUser)
 });


 app.all('*', (req, res) =>{
   res.json('Error 404! Page Not Found! ')
 });

app.listen(3000, () => {});

