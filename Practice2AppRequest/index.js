let express = require("express");
let bodyParser = require('body-parser');
let multer = require("multer");
 multer = multer();

app=express();
// app.use(bodyParser.json());

//Multer
app.use(multer.array());
app.use(express.static('public'));



//Query request
app.get("/", function (req, res) {

    let name = req.query.name;
    res.end(name);
});

//Body data get
app.post("/home", function (req, res) {

    let JSONData =  req.body;
    let stringData = JSON.stringify(JSONData);

    res.send(stringData);
});


//form data get by multer
app.post("/multer", function (req, res) {

    let JSONData =  req.body;
    let stringData = JSON.stringify(JSONData);

    res.send(stringData);
});


app.listen(5050, function () {
    console.log("Server running successful.");
});