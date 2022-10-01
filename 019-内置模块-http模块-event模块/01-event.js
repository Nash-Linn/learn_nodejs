const EventEmitter = require('events')

const event = new EventEmitter()

//事件监听
event.on("play",(data)=>{
	console.log("事件触发了--play",data)
})


event.on("run",(data)=>{
	console.log("事件触发了--run",data)
})

//事件触发
setTimeout(()=>{
	event.emit("play","111111")
},2000)


