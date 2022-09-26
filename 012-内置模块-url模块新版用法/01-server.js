var http = require('http')
var url = require("url")
var moduleRenderHTML = require("./module/renderHTML")
var moduleRenderStatus = require("./module/renderStatus")
//创建服务器


/*

http.createServer((req,res)=>{
	//接收浏览器传的参数  返回渲染内容
	//req 接收浏览器传的参数
	//res 返回渲染的内容
	
	// res.write("hello world11")
	// res.write("hello world22")
	
	if(req.url === "/favicon.ico"){
		//todo 读取本地图标
		return
	}
	
	console.log(req.url)
	
	res.writeHead(moduleRenderStatus.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
	res.write(moduleRenderHTML.renderHTML(req.url))
	
	//写end 才能停止 不然会一直加载
	res.end()
	// res.end("[1,2,3]")
}).listen(3000,()=>{
	console.log('server start')
})  

*/


var server = http.createServer()

server.on("request",(req,res)=>{
	let urlobj = url.parse(req.url,true)
	let pathName = url.parse(req.url).pathname
	
	console.log('urlobj',urlobj.query)
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

