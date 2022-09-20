const fs = require('fs');
var http = require('http');
fs.writeFile('index.html','<h1> Hello World </h1> <p> This is Soumik </p>',(err)=>{
    if(err){
        console.log(err);
    }
})

http.createServer(function (req, res) {
    let Data = fs.readFileSync('index.html')
    res.write(Data); 
    res.end(); 
  }).listen(5000); 


  