var fs = require('fs');
 function appnd(file,apndfile)
 {
var contents=fs.readFileSync(apndfile, 'utf8').toString(); 
    fs.appendFileSync(file, contents)
   console.log('data is appended');
     

}
 
appnd('merge.txt','first.txt');
appnd('merge.txt','second.txt');
appnd('merge.txt','third.txt');
appnd('merge.txt','fourth.txt');
appnd('merge.txt','fifth.txt');
