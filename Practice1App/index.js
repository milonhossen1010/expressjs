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

//Redirect response
app.get("/india", function (req, res) {

    res.redirect("http://localhost:5050/bangladesh");

});

app.get("/bangladesh", function (req, res) {

    res.send("This is Bangladesh.");

});


//Header response
app.get("/home", function (req, res) {

    res.append("name", "Milon");
    res.append("city", "Joypurhat");
    res.status(201).send("This is body data.").end();
});

app.listen(5050, function () {
    console.log("Express server running.");
});

//Cookie Response
app.get("/cookie", function (req, res) {

    res.cookie("name", "Milon");
    res.end("Cookie set successful.");
});


//Clear Cookie Response
app.get("/clearCookie", function (req, res) {

    res.clearCookie("name");
    res.end("Cookie clear successful.");
});