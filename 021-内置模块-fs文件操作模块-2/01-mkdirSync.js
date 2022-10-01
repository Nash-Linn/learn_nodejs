const fs = require("fs")

// fs.mkdirSync("./avatar")

//阻塞后面代码执行

try{
	fs.mkdirSync("./avatar")
}catch(e){
	console.log('111',e)
}