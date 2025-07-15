const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
    if (err) {
        return console.log(err);
    }
    let data1 = data;

    fs.readFile("b.txt", "utf-8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        let data2 = data;
        let result = data1.trim() + "\n" + data2; 

        fs.writeFile("demo.txt", result, function (err) {
            if (err) return console.log(err);
            console.log("done");
        });
    });
});
