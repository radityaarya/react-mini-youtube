import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
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

        this.videoSearch('')
    };

    videoSearch(term){
        YTSearch({key : API_KEY, term: term}, (videos) => {
            this.setState({
                listOfVideos: videos,
                selectedVideos: videos[0]
            })
        })
    }

    render(){
        const videoSearch = _.debounce( term => { this.videoSearch(term) }, 500 );

        return (
            <div id="root" className="container">
                <SearchBar onSearchVideo={ videoSearch } />
                <VideoDetail className="container col-md-2" video={ this.state.selectedVideos }/>
                <VideoList
                    onVideoSelect={ videoSelect => this.setState({ selectedVideos: videoSelect }) }
                    videos={ this.state.listOfVideos }
                />
            </div>
        )
    }
};

export default App;
