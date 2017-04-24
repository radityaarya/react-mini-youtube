import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import config from '../config/config';
const API_KEY = config.YOUTUBE_API_KEY;

/* components import */
import {
    SearchBar,
    VideoList,
    VideoDetail
} from './components/';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            listOfVideos : [],
            selectedVideos: null
         };

        YTSearch({key : API_KEY, term: 'fender'}, (videos) => {
            this.setState({
                listOfVideos: videos,
                selectedVideos: videos[0]
            })
        })
    };

    render(){
        return (
            <div className="container">
                <SearchBar />
                <VideoDetail video={ this.state.selectedVideos }/>
                <VideoList
                    onVideoSelect={ videoSelect => this.setState({ selectedVideos: videoSelect }) } 
                    videos={ this.state.listOfVideos }
                />
            </div>
        )
    }
};

export default App;
