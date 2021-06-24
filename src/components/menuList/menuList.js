import React, {Component} from 'react';
import MenuListItem from '../menuListItem';
import './menuList.css';
import {connect} from 'react-redux';

class MenuList extends Component {
    render() {
        const classList = this.props.menuOpened ? 'menu-list menu-list_active' : 'menu-list';
        return (
            <ul className={classList}>
                <MenuListItem/>
                <MenuListItem/>
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