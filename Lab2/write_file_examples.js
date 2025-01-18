const fs = require('fs');

// var data = "Hello world"

// var data = Buffer.from("Hello from GBC")


// fs.writeFile("output.txt",data,(err)=>{
//     if(err){
//         console.log(err.message)
//         return
//     }

//     console.log('Data written successfully...')
// });


let data = "Testing";
var error = fs.writeFileSync("ouput-Sync.txt",data)
console.log("Data written...")