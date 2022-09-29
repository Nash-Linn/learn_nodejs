const http = require("http");
const https = require("https");
const url = require("url");
const cheerio = require("cheerio");

http
  .createServer((req, res) => {
    let urlobj = url.parse(req.url, true);

    res.writeHead(200, {
      "Content-type": "application/json;charset=utf-8",
      //cors头"
      //接入控制允许源
      "access-control-allow-origin": "*",
    });

    switch (urlobj.pathname) {
      case "/api/aaa":
        //客户端 去客户端要数据
        httpget((data) => {
          res.end(spider(data));
        });
        break;
      default:
        res.end("404");
        break;
    }
  })
  .listen(3000);

function httpget(cb) {
  let data = "";

  //如果是http    http.get()
  //https
  https.get(`https://i.maoyan.com/`, (res) => {
    //进行数据收集
    res.on("data", (chunk) => {
      data += chunk;
    });
    //返回所有数据
    res.on("end", () => {
      // console.log(data)
      cb(data);
    });
  });
}

function spider(data) {
  //cheerio 解析html
  //
  let $ = cheerio.load(data);

  let $moviewlist = $(".column.content");

  let movies = [];

  $moviewlist.each((index, value) => {
    movies.push({
		title:$(value).find(".title").text(),
		grade:$(value).find(".grade").text(),
		actor:$(value).find(".actor").text()
	});
  });
  
  console.log("movies", movies);
  
  return JSON.stringify(movies) ;
}
