import React,{Component} from 'react';

class Computers extends Component{
    render(){
        return(
            <div className="photo-container">
            <h2>Results</h2>
            <ul>
             
          
              
              <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
              </li>
            </ul>
          </div>
        )
    }
}

export default Computers;

