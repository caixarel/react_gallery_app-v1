import React,{Component} from 'react';

class Cats extends Component{
    render(){
        const cats =this.props.data.catImages;
        return(
            <div className="photo-container">
            <h2>Results</h2>
            <ul>
            {cats.map(cat=>
              <li key={cat.id}>
                <img src={`https://farm5.staticflickr.com/${cat.server}/${cat.id}_${cat.secret}.jpg` }alt="" />
              </li>
            )}
            </ul>
          </div>
        )
    }
}

export default Cats;

