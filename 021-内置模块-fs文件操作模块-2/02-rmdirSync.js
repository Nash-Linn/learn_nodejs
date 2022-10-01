const fs = require("fs")

// fs.readdir("./avatar",(err,data)=>{
// 	data.forEach(item=>{
// 		fs.unlinkSync(`./avatar/${item}`)
// 	})
	
// 	fs.rmdir("./avatar",err=>{
// 		console.log(err)
// 	})
// })




// path：要删除的文件夹路径
const removeFileDir = (path)=>{
    var files = fs.readdirSync(path);
        for (let item of files) {
            var stats = fs.statSync(`${path}/${item}`);
            if (stats.isDirectory()) {
                removeFileDir(`${path}/${item}`)
            } else {
                fs.unlinkSync(`${path}/${item}`)
            }
        }
        fs.rmdirSync(path)
}
removeFileDir('./avatar')
