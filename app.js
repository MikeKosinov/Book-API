const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/book.routes');
const authorRoutes = require('./routes/author.routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//ROUTES
app.use('/bookstore',bookRoutes);
app.use('/bookstore',authorRoutes);

app.listen(PORT,'localhost',()=>console.log(`server start at ${PORT}`));
