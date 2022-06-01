import { useState, useEffect} from 'react'

const url = "http://api.weatherapi.com/v1/forecast.json?key=ef99587cee9e470ab6475542220106&q=45.611786, 10.483059&days=1&aqi=no&alerts=no";

export function useWeatherHour(setIsLoading:any){
  const [weatherData, setWeatherData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url);
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

export function useWeatherToday(setIsLoading:any){
  const [weatherData, setWeatherData] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();

        setWeatherData(json.forecast.forecastday[0].day)
        setIsLoading(false)
    };

    fetchData();
  }, []);

  return weatherData;
}

export function useWeather(){
  const [weatherData, setWeatherData] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();

        setWeatherData(json)
    };

    fetchData();
  }, []);

  return weatherData;
}
