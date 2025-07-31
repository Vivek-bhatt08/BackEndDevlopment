const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/todos", (req, res) => {
    fs.readFile("todo.json", "utf-8", (err, data) => {
        if (err) {
            console.error(err);
        }
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
