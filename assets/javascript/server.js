//Dependencies
var express = require("express");
var path = require("path");

//Express Setup
var app = express();
var PORT = 3000;

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

//Express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Restaurant Table Data

var tables = [
    {
        customerName: "Snoopy",
        phoneNumber: "555-555-5555",
        customerEmail: "snoopy@doghouse.com",
        customerID: "Woof",
    },
    {
        customerName: "Woodstock",
        phoneNumber: "555-555-5556",
        customerEmail: "birdy@treehouse.com",
        customerID: "Tweet",

    }
];

var waitlist = [
    {
        customerName: "Charlie Brown",
        phoneNumber: "555-555-5557",
        customerEmail: "charlie@kidhouse.com",
        customerID: "Football",
    },
    {
        customerName: "Linus",
        phoneNumber: "555-555-5558",
        customerEmail: "linus@kidhouse.com",
        customerID: "Blanket",

    }
];


//Routes
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (request, response) {
    response.sendFile(path.join(__dirname, "add.html"));
});

// Display tables
app.get("/api/tables", function (request, response) {
    return response.json(tables);
});

//Display Waitlist
app.get("/api/waitlist", function (request, response) {
    return response.json(waitlist);
});



//Create new tables and/or waitlist entry


app.post("/api/tables", function (request, response) {
    var newTable = request.body;

    if (tables.length < 5) {
        tables.push(newTable);


    } else {
        waitlist.push(newTable);
    }
    response.json(newTable);

});