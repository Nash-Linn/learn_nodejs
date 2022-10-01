const fs = require("fs")

// fs.writeFile("./avatar/a.txt","hello world",(err)=>{
// 	console.log(err)
// })

//writeFile 会覆盖原有内容  你好 会覆盖掉 hello world
fs.writeFile("./avatar/a.txt","你好",(err)=>{
	console.log(err)
})