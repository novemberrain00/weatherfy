import React from 'react';
import WeatherService from '../../services/index';
import { searchCityChanged, searchingCitiesChanged, setActiveCity } from '../../actions';
import store from '../../store';

const WithSearch = () => (Search) => {
    let allCities = []; //in future it will be contain all possible cities to choose

    return (props) => {
        let choosedCities = [], //all cities starting with user input
            inputValue = '';    //value of field of search

        const getCitiesByLetters = (e) => {
            inputValue = e.target.value;  
            const str = inputValue.toLowerCase();

            store.dispatch(setActiveCity(false))  //remove city choosed earlier

            if(str) {  //choosing all cities satrting with user input
                allCities.forEach(city => {
                    if(city.toLowerCase().indexOf(str) === 0) {
                        choosedCities.push(city);
                    }
                }) 
            }

            store.dispatch(searchingCitiesChanged(choosedCities))
            store.dispatch(searchCityChanged(inputValue)); 
        }
    
        const componentDidMount = async () => {
            const list = [];
    
            //fill allList by cities which parsed from https://api.hh.ru/areas
            await new WeatherService().getCitiesList()
            .then(data => {
                data.forEach(country => {
                    country.areas.forEach(area => { //parsing all countries
                        area.areas.forEach(city => { //parsing all republicks, districts, etc
                            list.push(city.name)
                        })
                    })
                })
                
                allCities = list; 
            })

        }

        const closeList = () => { //it happens when user clicks on city from list or delete all from searching panel
            store.dispatch(searchingCitiesChanged([])); 
        }

        return (
            <Search 
                getCitiesByLetters={getCitiesByLetters} 
                componentDidMount={componentDidMount}
                inputValue={inputValue}
                closeList={closeList}
                {...props}/>
        )
    }
}

export default WithSearch;