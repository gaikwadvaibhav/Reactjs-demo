import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list'
import VideoDetail from './video_detail';

const API_KEY = 'your_youtube_api_key' 


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };
    console.log('this.state.selectedVideo', this.state.selectedVideo)

    this.searchApi('arjit latest song 2018');
  }

  searchApi(term) {
    console.log('term', term)
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      console.log('videos', videos)
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })

    })
  }
  render() {
    const searchApi = _.debounce((term) => { this.searchApi(term) }, 300)
    return (
      <div className="App jumbotron">
        <div className="con tainer" >
          <SearchBar onSearchTermChange={searchApi} />
          <div className="row">
            <div className="col-md-8">
              <VideoDetail videos={this.state.selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
