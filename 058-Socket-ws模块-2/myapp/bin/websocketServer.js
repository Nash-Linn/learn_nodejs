const WebSocket = require("ws");
const JWT = require("../util/JWT");
const WebSocketServer = WebSocket.WebSocketServer;

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws, req) {
  const myURL = new URL(req.url, "http://127.0.0.1:3000");
  //校验token
  let token = myURL.searchParams.get("token");
  const payload = JWT.verify(token);
  if (payload) {
    ws.send(
      createMessage(WebSocketType.GroupChat, payload.username, "欢迎来到聊天室")
    );
    ws.user = payload;
  } else {
    ws.send(WebSocketType.Error, null, "token过期");
  }
  ws.on("message", function message(data) {
    // console.log("received: %s", data);
    // //转发给其他人
    // wss.clients.forEach(function each(client) {
    //   if (client !== ws && client.readyState === WebSocket.OPEN) {
    //     client.send(data, { binary: false });
    //   }
    // });

    const msgObj = JSON.parse(data);
    console.log("msgObj", msgObj);

    switch (msgObj.type) {
      case WebSocketType.GroupList:
        ws.send(
          createMessage(
            WebSocketType.GroupList,
            null,
            JSON.stringify(Array.from(wss.clients).map((item) => item.user))
          )
        );
        break;
      case WebSocketType.GroupChat:
        break;
      case WebSocketType.SingleChat:
        break;
    }
  });
});

const WebSocketType = {
  Error: 0, //错误
  GroupList: 1, //获取列表
  GroupChat: 2, //群聊
  SingleChat: 3, //单聊
};

function createMessage(type, user, data) {
  return JSON.stringify({
    type,
    user,
    data,
  });
}
