import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component{
    render(){
         return(
            <div>
                <nav className="main-nav">
                    <ul>
                    <li><NavLink to='/Photo/Cats'>Cats</NavLink></li>
                    <li><NavLink to='/Photo/Dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/Photo/Computers'>Computers</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
   
}
export default Nav;