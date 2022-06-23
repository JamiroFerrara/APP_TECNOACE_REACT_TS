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

let login: any;

export async function Login(username: string, password: string) : Promise<boolean> {
  login = {Username: username, Password: password}
  const res = await connection.invoke("Login", login);
  return res;
}

export async function GetListOfConnectedPlants() : Promise<any>{
  const res = await connection.invoke("GetListOfConnectedPlants", login)
  return res;
}

export async function GetPlantDetail(id: number) : Promise<any>{
  const res = await connection.invoke("GetPlantDetail", login, id)
  return res
}

export async function GetPlantProductionForGraphs(plantCode: number){
  const res = await connection.invoke("GetPlantProductionForGraphs", login, plantCode)
  return res
}
