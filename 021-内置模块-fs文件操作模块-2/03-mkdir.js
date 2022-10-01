const fs = require("fs").promises

//使用promises


// fs.mkdir("./avatar").then(data=>{
// 	console.log("mkdir",data)
// })

// fs.writeFile("./avatar/a.txt","你好").then(data=>{
// 	console.log("writeFile",data)
// })

fs.readFile("./avatar/a.txt","utf-8").then(data=>{
	console.log("readFile",data)
})