var http = require('http')

//创建服务器

http.createServer((req,res)=>{
	//接收浏览器传的参数  返回渲染内容
	//req 接收浏览器传的参数
	//res 返回渲染的内容
	
	// res.write("hello world11")
	// res.write("hello world22")
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
	res.write(`
		<html>
			<h1>
				hello world
			</h1>
			<h2>
				你好，世界
			</h2>
		</html>
	`)
	
	//写end 才能停止 不然会一直加载
	res.end()
	// res.end("[1,2,3]")
	
	
}).listen(3000,()=>{
	console.log('server start')
})  