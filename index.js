//state dependencies and initialize express
const express = require('express');
const app = express();
app.use(express.static('public'));

//3k for node app
const port = process.env.PORT || 3000;

//serve the home page
app.get('/', function(req, res){
  console.log(__dirname + "/views/index.html");
  res.sendFile(__dirname + "/views/index.html");
});

//run the app
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
