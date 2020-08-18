import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios';
import ImageList from './ImageList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      images: []
    }
  }
  
  onSearchSubmit = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params:{query:term},
      headers:{
        Authorization: "Client-ID sRhA0mGIpc83U1sQ2CgtC6byJoCcdATyRl67i4ThFDw"
      }
    });

    this.setState({
      images:response.data.results
    })
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}></ImageList>
      </div>
    )
  }
}
