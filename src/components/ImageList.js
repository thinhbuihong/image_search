import React, { Component } from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

export default class ImageList extends Component {
  
  render() {
    const images =  this.props.images.map((image) =>{
      return <ImageCard image={image} key={image.id}></ImageCard>
    })
    
    return (
      <div className="image-list">
        {images}
      </div>
    )
  }
}
