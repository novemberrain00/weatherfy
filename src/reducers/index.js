import { combineReducers } from "redux";

const initialMenuState = {
    menuOpened: false
}

const initialThemeState = {
    isThemeDark: false
}

const initialSearchState = {
    choosedCities: [],        //all cities starting with user input
    city: 'Москва',           //choosed city
    isActiveCityExist: false  //if user choosed a city on his own - true, else - false
}

const initialWeatherState = {
    data: {},     //the main data of weather. Here is such parametres as max or min temreture and pressure
    wind: {},     //data of wind
    iconPath: {}  //icon of current weather. Contains absoute path
}

const menuReducer = (state = initialMenuState, action) => {
    switch(action.type) {
        case 'MENU_OPENED': 
            return {
                menuOpened: !state.menuOpened,
            }
        default: 
            return state;
    }
}

const themeReducer = (state = initialThemeState, action) => {
    switch(action.type) {
        case 'THEME_CHANGED': 
            return {
                isThemeDark: !state.isThemeDark
            }
        default: 
            return state;
    }
}

const searchReducer = (state = initialSearchState, action) => {
    switch(action.type) {
        case 'CITY_CHANGED':
            return {
                ...state,
                city: action.city
            }
        case 'SEARCHING_CITIES_CHANGED':
            return {
                ...state,
                choosedCities: action.choosedCities
            }
        case 'SET_ACTIVE_CITY':
            return {
                ...state,
                isActiveCityExist: action.isActiveCityExist
            }
        default:
            return state;
    }
}

const weatherReducer = (state = initialWeatherState, action) => {
    switch(action.type) {
        case 'WEATHER_UPDATE':
            return {
                ...state,
                data: action.data,
                wind: action.wind
            }
        case 'ICON_CHANGED':
            return {
                ...state,
                iconPath: action.path
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    menu: menuReducer, 
    theme: themeReducer, 
    search: searchReducer,
    weather: weatherReducer
    })

export default rootReducer;