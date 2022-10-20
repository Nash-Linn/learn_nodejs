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

    //群发告知在线列表
    sendAll();
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
        console.log("msgObj", msgObj);
        wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(
              createMessage(WebSocketType.GroupChat, ws.user, msgObj.data),
              { binary: false }
            );
          }
        });
        break;
      case WebSocketType.SingleChat:
        wss.clients.forEach(function each(client) {
          console.log("msgObj.to", msgObj.to);
          if (
            client.user.username === msgObj.to &&
            client.readyState === WebSocket.OPEN
          ) {
            client.send(
              createMessage(WebSocketType.SingleChat, ws.user, msgObj.data),
              { binary: false }
            );
          }
        });
        break;
    }
  });
  ws.on("close", () => {
    wss.clients.delete(ws.user);
    sendAll();
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

function sendAll() {
  //转发给其他人
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(
        createMessage(
          WebSocketType.GroupList,
          null,
          JSON.stringify(Array.from(wss.clients).map((item) => item.user))
        )
      );
    }
  });
}
