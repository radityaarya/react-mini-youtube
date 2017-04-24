import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import config from '../config/config';
const API_KEY = config.YOUTUBE_API_KEY;

/* components import */
import {
    SearchBar,
    VideoList
} from './components/';


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
            <div className="container">
                <SearchBar />
                <VideoList videos={ this.state.listOfVideos } />
            </div>
        )
    }
};

export default App;
