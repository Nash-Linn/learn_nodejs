const http = require('http')
const url = require('url')

http.createServer((req,res)=>{
	let urlobj = url.parse(req.url,true)
	
	res.writeHead(200,{
		"Content-type":"application/json;charset=utf-8",
		//cors头"
		//接入控制允许源
		"access-control-allow-origin":"*"
	})
	
	
	switch(urlobj.pathname){
		case "/api/aaa":
			res.end(`${JSON.stringify({
				name:"kerwin",
				age:100
			})}`)
			break;
		default:
			res.end("404")
			break;
	}
}).listen(3000)