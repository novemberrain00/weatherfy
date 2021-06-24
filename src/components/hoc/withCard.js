import React from 'react';
import store from '../../store';
import { weatherUpdate, iconChanged } from '../../actions';
import WeatherService from '../../services';

const WithCard = () => (Card) => {

    return (props) =>  {

        const componentDidMount = async () => {

            //get default weather for Moscow
            await new WeatherService("Москва").getWeather()
            .then(res => {
                store.dispatch(weatherUpdate(res.main, res.wind));
                store.dispatch(iconChanged(`http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`))
            })
            .catch(err => {
                const data = {
                    temp_min: 'Ошибка',
                    temp_max: 'Ошибка',
                    pressure: 'Ошибка'

                },

                wind = {
                    speed: 'Ошибка'
                };


                store.dispatch(weatherUpdate(data, wind));
            });
        }

        const days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ],
        months = [
            'Января',
            'Февраля',
            'Марта',
            'Апреля',
            'Мая',
            'Июня',
            'Июля',
            'Августа',
            'Сентября',
            'Октября',
            'Ноября',
            'Декабря'
        ],
        date = new Date(),             //object of date
        dateOfMonth = date.getDate(),  //day of month
        dayNumber = date.getDay(),     //today's number
        monthNumber = date.getMonth(); //number of current month
        
        return(
            <Card 
                {...props} 
                componentDidMount={ componentDidMount }
                day={ days[dayNumber] }
                month={ months[monthNumber] }
                dateOfMonth={ dateOfMonth }
            />
        )
    }
}

export default WithCard;