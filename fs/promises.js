var fs = require('fs');
 function appnd(file,apndfile)
 {
     return new Promise(function(resolve,reject){
fs.readFile(apndfile, 'utf8', function(err, contents) {
    console.log(contents);
    fs.appendFile(file, contents, function (err) {
        if (err) { reject(err);}
        else
        {
        console.log('data is appended');
        }
      });
});

}); } 
appnd('merge.txt','first.txt');
appnd('merge.txt','second.txt');
appnd('merge.txt','third.txt');
appnd('merge.txt','fourth.txt');
appnd('merge.txt','fifth.txt');
