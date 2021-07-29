import React,{Component} from "react";
import Dogs from './Components/Dogs'
import Cats from './Components/Cats'
import Computers from './Components/Computers'
import Home from './Components/Home'
import config from './Components/config'
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import axios from "axios";
import SearchResult from "./Components/SearchResult";



class App extends Component {
  state={
    dogImages:[],
    catImages:[],
    computersImages:[],
    otherImages:[],
  };

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ catImages: response.data.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ dogImages: response.data.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ computersImages: response.data.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
      
  }
  

  render() {
    return(
      <BrowserRouter>
        <div className="App">
        <Route path='/' component={Home} />
          <Switch>
            <Route path='/Dogs' render={()=><Dogs data={this.state} history={this.props.history}/>}/>
            <Route path='/Cats' render={()=><Cats data={this.state}/>} />
            <Route path='/Computers' render={()=><Computers data={this.state}/>} />
            <Route path='/:search' component={SearchResult} />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
 
        
}
  

export default App;
