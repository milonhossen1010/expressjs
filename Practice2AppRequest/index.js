let express = require("express");
let bodyParser = require('body-parser');
let multer = require("multer");


app=express();

//Application Middleware
app.use(function (req, res, next) {

    console.log("I'm application middleware.");
    next();

});


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
// app.post("/multer", function (req, res) {
//
//     let JSONData =  req.body;
//     let stringData = JSON.stringify(JSONData);
//
//     res.send(stringData);
// });


//File upload
let storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, "./uploads");
    },

    filename: function (req, file, callBack) {
        callBack(null, file.originalname);
    }

});

let upload = multer({storage:storage}).single("myfile");

app.post('/upload', function (req, res) {
    upload(req, res, function (error) {
        if (error){
            res.end("File upload fail.");
        } else {
            res.end("File upload successful.");
        }
    });
});


app.listen(5050, function () {
    console.log("Server running successful.");
});