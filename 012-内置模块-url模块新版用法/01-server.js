var http = require('http')
var url = require("url")
var moduleRenderHTML = require("./module/renderHTML")
var moduleRenderStatus = require("./module/renderStatus")
//创建服务器

var server = http.createServer()

server.on("request",(req,res)=>{
	// let urlobj = url.parse(req.url,true)
	// let pathName = url.parse(req.url).pathname
	
	const myURL = new URL(req.url,'http://127.0.0.1:3000')
	
	console.log(myURL.searchParams)
	
	for(let [key,value] of myURL.searchParams){
		console.log(key,value)
	}
	
	
	
	var  pathName = myURL.pathname
	
	if(pathName === "/favicon.ico"){
		//todo 读取本地图标
		return
	}
	
	res.writeHead(moduleRenderStatus.renderStatus(pathName),{"Content-Type":"text/html;charset=utf-8"})
	res.write(moduleRenderHTML.renderHTML(pathName))
	
	res.end()
})


server.listen(3000,()=>{
	console.log('server start')
})

