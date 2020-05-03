const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
// const morgan = require('morgan');
// const _ = require('lodash');
// var mysql = require('mysql');



const app = express();

app.use(express.static('public')); //to access the files in public folder
app.use(fileUpload());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(morgan('dev'));


var corsOptions = {
  origin: "http://localhost:8081"
  // Access-Control-Allow-Origin: *
};



// upploading files,  next save to database users/files
app.post("/upload",  (req, res) => {
  if (!req.files === null) {
    return res.status(500).send({ msg: 'No file uploaded' });
  }

  const myFile = req.files.file;

  myFile.mv(`${__dirname}/public/${myFile.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    return res.send({ name: myFile.name, path: `/uploads/${myFile.name}` });
  });
});   




require("./app/routes/user.router.js")(app);
require("./app/routes/job.router.js")(app);
require('./app/config/db.config.js');

// set port, listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});