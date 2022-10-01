const fs = require("fs")

//appendFile 不会覆盖原有内容  对内容进行追加
fs.appendFile("./avatar/a.txt","\n你好",(err)=>{
	console.log(err)
})