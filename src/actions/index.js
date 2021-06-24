const menuOpened = () => {
    return {
        type: 'MENU_OPENED'
    }
}

const themeChanged = () => {
    return {
        type: 'THEME_CHANGED'
    }
}

const searchCityChanged = (city) => {
    return {
        type: 'CITY_CHANGED',
        city
    }
}

const searchingCitiesChanged = (list) => {
    return {
        type: 'SEARCHING_CITIES_CHANGED',
        choosedCities: list
    }
}

const setActiveCity = (isActiveCityExist) => {
    return {
        type: 'SET_ACTIVE_CITY',
        isActiveCityExist
    }
}

const weatherUpdate = (data, wind) => {
    return {
        type: 'WEATHER_UPDATE',
        data,
        wind
    }
}

const iconChanged = (path) => {
    return {
        type: 'ICON_CHANGED',
        path
    }
}

export {
    menuOpened,
    themeChanged,
    searchCityChanged,
    searchingCitiesChanged,
    setActiveCity,
    weatherUpdate,
    iconChanged
}