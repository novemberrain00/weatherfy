import React, {Component} from 'react';
import Search from '../search';
import ThemeChanger from '../theme-changer';
import Hamburger from '../hamburger';
import CurrentCity from '../currentCity';
import './appHeader.css';

export default class AppHeader extends Component {
    render() {
        return(
            <div className="app-header">
                <Hamburger/>
                <Search/>
                <ThemeChanger/>
                <CurrentCity/>
            </div>
        )
    }
}