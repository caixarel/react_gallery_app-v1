import React,{Component} from "react";
import Dogs from './Components/Dogs'
import Cats from './Components/Cats'
import Computers from './Components/Computers'
import Home from './Components/Home'
import config from './Components/config'
import { BrowserRouter, Route ,Switch,Redirect} from "react-router-dom";
import axios from "axios";
import Gallery from "./Components/Gallery";
import  NotFound from "./Components/NotFound";


class App extends Component {
  state={
    dogImages:[],
    catImages:[],
    computersImages:[],
    otherImages:[],
    isLoading:true,
    searchText:''
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
  
  searchImages =(value)=>{
    this.setState({searchText:value});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${value}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ otherImages: response.data.photos.photo });
        this.setState({isLoading:false});

      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  render() {
    return(
      <BrowserRouter>
        <div className="App">
        <Route path='/' render={()=><Home data={this.state} searchFunction={this.searchImages}/>} />
          <Switch>
            <Route exact path='/' render={()=><Redirect to={`/Dogs`}/>}/>
            <Route exact path='/Photo/Dogs' render={()=><Dogs data={this.state} />}/>
            <Route exact path='/Photo/Cats' render={()=><Cats data={this.state}/>} />
            <Route exact path='/Photo/Computers' render={()=><Computers data={this.state}/>} />
            <Route path='/Photo/:search' render={()=><Gallery data={this.state} searchFunction={this.searchImages}/>} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
 
}

export default App;
