import React, { Component } from 'react';

class PollsOption extends Component {
  render() {
    return (
      <div className="polls-option">
        <img src={this.props.anime.thumbPath} alt={this.props.anime.name} />
        <div className="polls-option-infobox">
          <span className="polls-option-info">{this.props.anime.name}</span>
          <input name={this.props.anime.name} className="polls-option-checkbox" type="checkbox" onChange={this.props.onChange} ></input>
        </div>
      </div>
    );
  }
}

export default PollsOption;