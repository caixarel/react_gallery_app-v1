import React,{Component} from 'react';
import config from '../Components/config'
import axios from "axios";


class SearchResult extends Component  {
  state={
    images:[]
  }
  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${this.props.match.params.search}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ images: response.data.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });}

  render(){
    if(this.state.images.length>1){
      return (
        <div className="photo-container">
          <h2>Results</h2>
          <ul>
          {this.state.images.map(image=>
            <li key={image.id}>
              <img src={`https://farm5.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg` }alt="" />
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
        <li class="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
        </ul>
      </div>
    )
    }
      
  }
  
}

export default SearchResult;

