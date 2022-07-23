let express = require("express");

app=express();

app.get("/", function (req, res) {

    res.send("Hi this is express");

});

//Status code
app.post("/", function (req, res) {

    res.status(401).send("Unauthorized code.");

});


//Json array
app.get('/json', function (req, res) {
    let myJsonArray = [
        {
            Name: "Milon",
            City: "Joypurhat"
        },
        {
            Name: "Milon",
            City: "Joypurhat"
        }
    ];

    res.status(201).json(myJsonArray);


} );


//Download response
app.get("/download", function (req, res) {

    res.download("./uploads/work.png");

});

app.listen(5050, function () {
    console.log("Express server running.");
});