import React, {Component} from 'react';
import MenuListItem from '../menuListItem';
import './menuList.css';
import {connect} from 'react-redux';

class MenuList extends Component {
    render() {
        const classList = this.props.menuOpened ? 'menu-list menu-list_active' : 'menu-list';
        return (
            <ul className={classList}>
                <MenuListItem text="Мой GitHub" path="https://github.com/novemberrain00"/>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuOpened: state.menu.menuOpened
    }
}

export default connect(mapStateToProps)(MenuList);