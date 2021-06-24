import React, {Component} from 'react';
import WithCard from '../hoc/withCard';
import AjaxLoader from '../ajaxLoader';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './card.css';

class Card extends Component {

    componentDidMount() {
        this.props.componentDidMount()
    }

    render() {
        
        let {tempMax, tempMin, iconPath, day, month, dateOfMonth} = this.props; 
        
        //theese values get string as value only when fetch ends with error
        tempMax = typeof(tempMax) === 'string' ? 'Ошибка' : Math.floor(tempMax) + ' °'; 
        tempMin = typeof(tempMin) === 'string' ? 'Ошибка' : Math.floor(tempMin) + ' °';

        return (
            <>
                <div className="card">
                    <div className="card__top">
                        <h3 className="card__day">{ day }</h3>
                        <span className="card__date">{ dateOfMonth } { month }</span>
                    </div>
                    <div className="card__content">
                        <div className="card__daytime">
                            <h5 className="card__daytime-title">Днём</h5>
                            <div className="card__data">
                                <span className="card__daytime-temp">{tempMax || <AjaxLoader/>}</span>
                                <span className="card__daytime-weather">
                                    <img src={iconPath || 'ajax-loader.gif'} alt="sunny"></img>
                                </span>
                            </div>
                        </div>
                        <div className="card__daytime">
                            <h5 className="card__daytime-title">Ночью</h5>
                            <div className="card__data">
                                <span className="card__daytime-temp">{tempMin || <AjaxLoader/>}</span>
                                <span className="card__daytime-weather"><img src={iconPath || 'ajax-loader.gif'}  alt="sunny"></img></span>
                            </div>
                        </div>
                    </div>
                    <div className="card__bottom">
                        <Link to="/more-info" className="card__link">Подробнее</Link>
                    </div>
                </div>
            </>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        tempMax: state.weather.data.temp_max,
        tempMin: state.weather.data.temp_min,
        iconPath: state.weather.iconPath
    }
}

export default connect(mapStateToProps)(WithCard()(Card));