let express = require("express");
app=express();

app.get("/", function (req, res) {
    res.end("This is simple request.");
});

app.listen(5050, function () {
    console.log("Server running successful.");
});