const fs = require("fs")

fs.stat("./avatar",(err,data)=>{
	console.log(data)
	
	//测试是不是文件
	console.log(data.isFile())
	
	//测试是不是目录
	console.log(data.isDirectory())
	
})