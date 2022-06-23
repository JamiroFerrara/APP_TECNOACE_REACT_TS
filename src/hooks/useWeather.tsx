import { useState, useEffect} from 'react'

export function useWeatherHour(setIsLoading:any, lat:string, long:string){
  const [weatherData, setWeatherData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url(lat,long));
        const json = await response.json();

        const d = new Date();
        let hour = d.getHours();
        setWeatherData(json.forecast.forecastday[0].hour.splice(hour, 24))
        setIsLoading(false)
    };

    fetchData();
  }, []);

  return weatherData;
}

export function useWeatherToday(setIsLoading:any, lat: string, long: string){
  const [weatherData, setWeatherData] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url(lat,long));
        const json = await response.json();

        setWeatherData(json.forecast.forecastday[0].day)
        setIsLoading(false)
    };

    fetchData();
  }, []);

  return weatherData;
}

export function useWeather(lat: string, long: string){
  const [weatherData, setWeatherData] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url(lat,long));
        const json = await response.json();

        setWeatherData(json)
    };

    fetchData();
  }, []);

  return weatherData;
}

function url(lat: string, long: string){
  const url = "http://api.weatherapi.com/v1/forecast.json?key=ef99587cee9e470ab6475542220106&q=" + lat + ", " + long +"&days=1&aqi=no&alerts=no";
  return url;
}
