
const path = require('path');

const express = require('express');
const index = require('./routes');
require("dotenv").config();


const app = express();
app.set('view engine','ejs');

//app.use('/static', express.static(path.join(__dirname,'./public')));
app.use(express.static('./public'));

app.use("/", (req, res, next) => {
  res.locals.siteTitle = "Roshiv";
  next();
});

app.use('/',index)

app.use(function(request,response){
  response.status(404);
  //response.send(url('./page_not_found.html'));
  response.redirect('/404.html');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){

  console.log(`Listening on port: ${PORT}`);
})