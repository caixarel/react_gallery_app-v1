import React,{Component} from 'react';

class Computers extends Component{
    render(){
      const computers =this.props.data.computersImages;
      return(
          <div className="photo-container">
          <h2>Results</h2>
          <ul>
          {computers.map(computers=>
            <li key={computers.id}>
              <img src={`https://farm5.staticflickr.com/${computers.server}/${computers.id}_${computers.secret}.jpg` }alt="" />
            </li>
          )}
          </ul>
        </div>
      )
    }
}

export default Computers;

