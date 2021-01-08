import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state =  {
            cats: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce => responce.json())
        .then(users => this.setState({cats: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredCats = this.state.cats.filter(cats => {
            return cats.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
       
       return !this.state.cats.length ? 
             <h1>Loading</h1> :
                <div className='tc'>
                    <h1 className='f1'>Little Cats</h1>
                    <SearchBox searchChange={this.onSearchChange}/> 
                    <Scroll>   
                        <CardList cats={filteredCats} />
                    </Scroll>
                </div>
    }
}

export default App;