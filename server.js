
const path = require('path');

const express = require('express');
const index = require('./routes');


const app = express();
app.set('view engine','ejs');

//app.use('/static', express.static(path.join(__dirname,'./public')));
app.use(express.static('./public'));

app.use('/',index)

app.use(function(request,response){
  response.status(404);
  //response.send(url('./page_not_found.html'));
  response.redirect('/page_not_found.html');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){

  console.log(`Listening on port: ${PORT}`);
})