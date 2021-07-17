import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom'
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCSaR7MdC9vs1YfLVe0fTwfu5lvzdOQsVw';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
            // this.setState({})
        });
    }
    render() {
        return (
        <div>
            <SearchBar />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));