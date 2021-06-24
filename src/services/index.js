export default class WeatherService {
    constructor(city) {
        this.url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=761d1d1888eebee3b64ce48fc5680f64&lang=ru&units=metric`;
    }
    
    getWeather = async () => {
        const response = await fetch(this.url);
          
        if (!response.ok) {
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result;
    }

    getCitiesList = async () => {
        const response = await fetch('https://api.hh.ru/areas');
          
        if (!response.ok) {
            throw new Error('Server Error');
        }
        const result = await response.json();
        return result;
    }
}
