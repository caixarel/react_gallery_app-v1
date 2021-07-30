import React,{Component} from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";


class Gallery extends Component  {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

 
  componentDidMount(){
    this.props.searchFunction(this.props.match.params.search)
    
  }

  componentDidUpdate(){

    if(this.props.data.searchText !==this.props.match.params.search ){
      this.props.searchFunction(this.props.match.params.search);
    }

  }

  render(){
    const pics=this.props.data.otherImages;
    if(this.props.data.isLoading){
      return (
        <div className="photo-container">
          <h2>Results</h2>
          <h2>Loading...</h2>
        </div>
      )
    }
    else if(pics.length>1){
      return (
        <div className="photo-container">
          <h2>Results</h2>
          <ul>
          {pics.map(pic=>
              <li key={pic.id}>
                <img src={`https://farm5.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg` }alt="" />
              </li>
            )}
          </ul>
        </div>
      );
    }
    else{
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
  
}

export default withRouter(Gallery);

