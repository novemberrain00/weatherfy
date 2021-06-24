import React, {Component} from 'react';
import Card from '../card';
import Modal from '../modal';
import AppHeader from '../appHeader';
import MenuList from '../menuList';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            styles: {
                boxShadow: `-304px 0px 1000px 100px rgb(0 159 255 / 69%) inset`
            }
        }

        this.setBoxShadowByMouseMove = this.setBoxShadowByMouseMove.bind(this)
    }

    setBoxShadowByMouseMove(e) {  //set new inner shadow when moving mouse
        this.setState({styles: {boxShadow: `${e.pageX-300}px 0px 1000px 100px rgb(0 159 255 / 69%) inset`}})
    }
    
    render() {

        let classList = this.props.isThemeDark ? 'app dark' : 'app';

        return (
            <div style={this.state.styles} onMouseMove={this.setBoxShadowByMouseMove} className={classList}>
                <AppHeader/>
                <MenuList/>
                <Router>
                    <Route exact path='/' component={Card} />
                    <Route exact path='/more-info' component={Modal} />
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isThemeDark: state.theme.isThemeDark
    }
}

export default connect(mapStateToProps)(App);
