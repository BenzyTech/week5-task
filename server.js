const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
});

// Serving my css as static so it can load with the html files
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});