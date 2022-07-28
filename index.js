//state dependencies and initialize express
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

//3k for node app
const port = process.env.PORT || 3000;

//serve the home page
app.get('/', function(req, res){
  console.log(process.cwd() + "/views/index.html");
  res.sendFile(process.cwd() + "/views/index.html");
});

//run the app
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
