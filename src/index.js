import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import { apiKey } from '../config.js';

import SearchBar from './components/SearchBar';
import VideoList from './components/videoList';


class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('ballet');
  }

  videoSearch(term) {
    YTSearch({ key: apiKey, term: term}, (videos) => {
      this.setState ({
        videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    //console.log(this.state);
    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoList
          videos={this.state.videos}
        />
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('.container'));