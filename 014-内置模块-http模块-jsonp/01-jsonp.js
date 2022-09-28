const http = require('http')
const url = require('url')

http.createServer((req,res)=>{
	let urlobj = url.parse(req.url,true)
	switch(urlobj.pathname){
		case "/api/aaa":
			res.end(`${urlobj.query.callback}(${JSON.stringify({
				name:"kerwin",
				age:100
			})})`)
			break;
		default:
			res.end("404")
			break;
	}
}).listen(3000)