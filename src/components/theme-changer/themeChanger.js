import React, {Component} from 'react';
import './themeChanger.css';
import {themeChanged} from '../../actions'
import { connect } from 'react-redux';
import store from '../../store';

class ThemeChanger extends Component {
    render() {
        const ballClassList = this.props.isThemeDark ? 'theme-changer__ball theme-changer__ball_enabled' : 'theme-changer__ball',
            changerClassList = this.props.isThemeDark ? 'theme-changer theme-changer_dark' : 'theme-changer';


        return (
            <div className={changerClassList} onClick={() => {store.dispatch(themeChanged())}}>
                <div className={ballClassList}></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isThemeDark: state.theme.isThemeDark
    }
}

export default connect(mapStateToProps)(ThemeChanger);