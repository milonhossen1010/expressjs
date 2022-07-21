let express = require("express");

app=express();

app.get("/", function (req, res) {

    res.send("Hi this is express");

});

app.post("/", function (req, res) {

    res.status(401).send("Unauthorized code.");

});


app.listen(5050, function () {
    console.log("Express server running.");
});