import React, {Component} from 'react';
import './hamburger.css';
import { menuOpened } from '../../actions';
import { connect } from 'react-redux';
import store from '../../store';


class Hamburger extends Component {
    render() {

        const classList = this.props.menuOpened ? 'hamburger hamburger_active' : 'hamburger';

        return (
            <div onClick={() => {store.dispatch(menuOpened())}} className={classList}>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuOpened: state.menu.menuOpened
    }
}

export default connect(mapStateToProps)(Hamburger);