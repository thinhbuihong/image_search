import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      term:''
    };
  }
  
  onFormSubmit = (event) =>{
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  onInputChange = (event) =>{
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text" value={this.state.term}
            onChange={this.onInputChange}></input>
          </div>  
        </form>
      </div>
    )
  }
}
