const fs = require("fs")

fs.rmdir("./avatar",(err)=>{
	console.log(err)
	if(err && err.code === "ENOENT"){
		console.log("目录不存在")
	}
	
	if(err && err.code === "ENOTEMPTY"){
		console.log("目录下不为空")
	}
})