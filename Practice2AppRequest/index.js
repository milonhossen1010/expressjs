let express = require("express");
app=express();



//Query request
app.get("/", function (req, res) {

    let name = req.query.name;
    res.end(name);
});



app.listen(5050, function () {
    console.log("Server running successful.");
});