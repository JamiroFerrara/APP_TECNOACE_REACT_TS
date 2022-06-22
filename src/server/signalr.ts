import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

let connection: any;

export async function InitConnection(){
  const ip = "signalr.tecnoace.eu"
  // const iIp = "192.168.11.54"
  const port = "15191"
  const hub  = "Tecnoace_Plants"
  const url = "https://" + ip + ":" + port + "/" + hub

  try {
    connection = new HubConnectionBuilder()
      .withUrl(url)
      .configureLogging(LogLevel.Information)
      .build();

    // connection.onclose(e => {
    // });

    await connection.start().then(() => {console.log("connected")});
    // await connection.invoke("SendMessage", "phone", "connected" );
  } catch (e) {
    console.log(e);
  }
}

export async function Login(username: string, password: string) : Promise<boolean> {
  const login = {Username: username, Password: password}
  const res = await connection.invoke("Login", login);
  return res;
}
