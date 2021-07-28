import React,{Component} from 'react';
import {NavLink,Route} from 'react-router-dom'
import Photo from './Dogs';

class Nav extends Component{
    render(){
        return(
            <nav className="main-nav">
                <ul>
                <li><NavLink to='/Cats'>Cats</NavLink></li>
                <li><NavLink to='/Dogs'>Dogs</NavLink></li>
                <li><NavLink to='/Computers'>Computers</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;

