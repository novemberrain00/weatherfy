import React, { Component } from 'react';
import { connect } from 'react-redux';
import './currentCity.css';

class CurrentCity extends Component{
    render() {

        //"isActiveCityExist" neccesary to tell to user does he choosed a city and "city" tells what this city is
        const city = this.props.isActiveCityExist ? this.props.city : 'Не выбран';

        return(
            <p className="current-city">Город: { city }</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isActiveCityExist: state.search.isActiveCityExist,
        city: state.search.city
    }
}

export default connect(mapStateToProps)(CurrentCity)