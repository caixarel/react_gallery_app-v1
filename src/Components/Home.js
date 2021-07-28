import React, { Component } from 'react';
import SearchForm from './SearchForm'
import Nav from './Nav';
class Home extends Component {    

  handleSubmit =(e)=>{
    e.preventDefault();

  }
  
  render() {
    return (
        <div className="main-content home">
            <h1>Hello</h1>

            
        </div>
    );
  }
}

export default Home;