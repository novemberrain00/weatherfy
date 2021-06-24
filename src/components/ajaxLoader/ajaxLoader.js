import React, {Component} from 'react';
import './ajax-loader.css';

export default class AjaxLoader extends Component {
    render() {
        return <img src="ajax-loader.gif" className="ajax-loader" alt="Loading..."/>
    }
}