import React,{Component} from "react";
import SearchForm from './Components/SearchForm'
import Nav from './Components/Nav'
import Dogs from './Components/Dogs'
import Cats from './Components/Cats'
import Computers from './Components/Computers'
import Home from './Components/Home'
import config from './Components/config'
import { BrowserRouter, Route ,Switch} from "react-router-dom";


const App = () => (
        <BrowserRouter>
          <div className="App">
            <SearchForm />
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Dogs' component={Dogs} />
              <Route path='/Cats' component={Cats} />
              <Route path='/Computers' component={Computers} />
            </Switch>

          </div>
        </BrowserRouter>
        
      );
  

export default App;
