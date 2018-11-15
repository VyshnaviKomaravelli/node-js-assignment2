read.fs:
var fs = require('fs');

fs.readFile('temp.txt', function(err, data) {
 fs.writeFile('temp1.txt', data, function(err, data){
    if (err) console.log(err);
    console.log("Successfully Written to File.");
});
});
