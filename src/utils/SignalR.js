//const signalR = require('@microsoft/signalr');
import { HubConnectionBuilder } from '@microsoft/signalr';

const http = "https";
const port = "15191";
const domain = "signalr.tecnoace.eu"
const hub = "/chatHub"
const url = http + "://" + domain + ":" + port + hub;
const connection = new HubConnectionBuilder().withUrl(url, {}).build();

export async function InitConnection(){
  try {
    //connection.onclose(e => {
   // });

    await connection.start().then(() => {console.log("connected")});
    await connection.invoke("SendMessage", user, room );
    //signalR.setConnection(connection);

  } catch (e) {
    console.log(e);
  }
}
