import React, { Component } from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import WeatherService from '../../services';
import { searchCityChanged, weatherUpdate, setActiveCity } from '../../actions';

import './citiesList.css';

class CitiesList extends Component {

    onMenuItemClick = async (city) => {

         //it's required be for processing cities which marked with their districts. For example: Москва (Московская область)
        if(city.includes(' (')) {   
            city = city.slice(0, city.indexOf(' ('));
        }

        store.dispatch(searchCityChanged(city))
        this.props.closeList();

        //set new weather for city which was choosed by user
        await new WeatherService(city).getWeather()
        .then(res => {
            store.dispatch(setActiveCity(true));
            store.dispatch(weatherUpdate(res.main, res.weather[0].description, res.wind));
        })
    }
 
    render() {
        if(this.props.choosedCities) {
            return(
                <ul className="cities-list">
                    {
                        this.props.choosedCities.map((city, i) => {
                            return <li 
                                onClick={ ()=>{ this.onMenuItemClick(city) } } 
                                className="cities-list_item" 
                                key={city + i}
                                >{city}</li>
                        })
                    }
                </ul>
            )
        }

        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        choosedCities: state.search.choosedCities
    }
} 

export default connect(mapStateToProps)(CitiesList);