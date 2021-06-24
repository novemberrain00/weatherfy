import React, {Component} from 'react';
import CitiesList from '../citiesList';
import WithSearch from '../hoc/withSearch';
import { connect } from 'react-redux';
import './search.css';

class Search extends Component {

    componentDidMount() {
        this.props.componentDidMount()
    }

    render() {

        const {city, inputValue, getCitiesByLetters, choosedCities, closeList} = this.props;

        this.inputValue = city ? city : inputValue; 

        return (
            <div className="search-wrapper">
                <input 
                    value={this.inputValue}
                    onInput={getCitiesByLetters}
                    className="search" placeholder="Город"
                />
                
                <CitiesList 
                    closeList={closeList} 
                    inputValue={inputValue} 
                    list={choosedCities}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        city: state.search.city 
    }
}

export default connect(mapStateToProps)(WithSearch()(Search))