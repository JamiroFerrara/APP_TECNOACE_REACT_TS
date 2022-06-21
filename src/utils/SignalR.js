const signalR = require('@microsoft/signalr');
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const url = "https://signalr.tecnoace.eu:15191/chatHub";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

export async function InitConnection(){
    joinRoom("Phone", "Suck it plz");
}

const joinRoom = async (user, room) => {
  try {

    const connection = new HubConnectionBuilder()
      .withUrl(url, {
      })
      .configureLogging(LogLevel.Information)
      .build();

    connection.onclose(e => {
    });

    await connection.start().then(() => {console.log("connected")});
    await connection.invoke("SendMessage", user, room );
  } catch (e) {
    console.log(e);
  }
}

