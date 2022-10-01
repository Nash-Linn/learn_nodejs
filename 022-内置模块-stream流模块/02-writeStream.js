const fs = require("fs")

const ws = fs.createWriteStream("./2.txt","utf-8")

ws.write("111111111")
ws.write("22222222")
ws.write("33333")
ws.write("444444")

ws.end()