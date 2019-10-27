const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log(socket);
  console.log(22);
});


app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
  extname: '.hbs',
  defaultLayout: null,
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

app.get('/', (req, res) => {
  res.render('main');
});

app.all('*', (req, res) => {
  res.json('404');
});

http.listen(3000, () => {
  console.log(3000);
});
