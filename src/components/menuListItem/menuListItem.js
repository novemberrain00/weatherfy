import React, {Component} from 'react';
import './menuListItem.css';

export default class MenuListItem extends Component {
    render() {
        return (
            <li className="menu-list__item"><a className="menu-list__link" href="#">Главная</a></li>
        )
    }
}

