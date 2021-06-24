import React, { Component } from 'react';
import AjaxLoader from '../ajaxLoader'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import WithCard from '../hoc/withCard';
import './modal.css'

class Modal extends Component {
    componentDidMount() {
        this.props.componentDidMount()
    }

    render() {

        let { speed, pressure } = this.props

        //theese values get string as value only when fetch ends with error
        speed = typeof(speed) === 'string' ? speed : Math.floor(speed) + ' м/с'; 
        pressure = typeof(pressure) === 'string' ? pressure : Math.floor(pressure / 133) + ' м/с';


        return (
            <div className="modal">
                <div className="modal__top">
                    <h1 className="modal__title">Подробная информация</h1>
                </div>
                <div className="modal__content">
                    <table className="modal__table">
                        <tbody>
                            <tr className="modal__table-item">
                                <td>
                                    Скорость ветра:
                                </td>
                                <td>
                                    { speed || <AjaxLoader/> } 
                                </td>
                            </tr>
                            <tr className="modal__table-item">
                                <td>
                                    Атмосферное давление:
                                </td> 
                                <td>
                                    { pressure || <AjaxLoader/>}
                                </td>
                            </tr>   
                        </tbody>
                    </table>
                </div>
                <div className="modal__bottom">
                    <Link to="/" className="modal__link">Скрыть</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pressure: state.weather.data.pressure,
        speed: state.weather.wind.speed
    }
}

export default connect(mapStateToProps)(WithCard()(Modal));