import React,{Component} from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

class Home extends Component {    

    render() {
  
        return (
            <div className="main-content home">
                <SearchForm searchFunction={this.props.searchFunction} />
                <Nav />
            </div>
        );
  }
}

export default Home;