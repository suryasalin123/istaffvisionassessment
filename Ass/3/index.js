const fs = require('fs');
console.log("current directory:",__dirname);
fs.readdir(__dirname,function(err,data){
    if(err){
        console.log("error occured:",err);
        return;
    }
    console.log("Content of directory is:",data)
})