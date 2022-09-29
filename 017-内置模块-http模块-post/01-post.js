const http = require('http')
const https = require('https')
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
			//客户端 去客户端要数据
			httpPost((data=>{
				res.end(data)
			}))
			break;
		default:
			res.end("404")
			break;
	}
}).listen(3000)


function httpPost(cb){
	let data = ''
	
	let options = {
		hostname:'m.xiaomiyoupin.com',
		port:"443",
		path:"/mtop/market/search/placeHolder",
		method:"POST",
		headers:{
			"Content-Type":"application/json",
			
			// "Content-Type":"x-www-form-urlencoded"
		}
	}
	
	//https
	let req = https.request(options,(res)=>{
		res.on("data",chunk=>{
			data += chunk
		})
		res.on("end",()=>{
			cb(data)
		})
	})
	
	req.write(JSON.stringify([{},{
    "baseParam": {
      "ypClient": 1
	}}]))
	
	req.end()
}