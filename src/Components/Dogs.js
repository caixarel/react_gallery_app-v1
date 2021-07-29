import React,{Component} from 'react';

class Dogs extends Component{
    render(){
      
      const dogs=this.props.data.dogImages
        return(
            <div className="photo-container">
            <h2>Results</h2>
            <ul>
            {dogs.map(dog=>
              <li key={dog.id}>
                <img src={`https://farm5.staticflickr.com/${dog.server}/${dog.id}_${dog.secret}.jpg` }alt="" />
              </li>
            )}
            </ul>
          </div>
        )
    }
}

export default Dogs;

