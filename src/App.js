import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

import config from '../config/config';
const API_KEY = config.YOUTUBE_API_KEY;

class App extends Component {
    constructor(props){
        super(props);

        this.state = { listOfVideos : [] };

        YTSearch({key : API_KEY, term: 'fender'}, (videos) => {
            this.setState({ listOfVideos: videos })
        })
    };

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={ this.state.listOfVideos } />
            </div>
        )
    }
};

export default App;
