import React, { Component } from 'react';
import PollsOption from './pollsOption';
import { animesMockData, animesMockData2 } from './pollsMockdata';

class PollsContent extends Component {
  getMockData = () => {
    let data = [];

    const { dropdownState = 'Choose One...' } = this.props;
    if (dropdownState === 'Anime of the Season') {
      return animesMockData;
    } else if (dropdownState === 'Best Soundtrack') {
      return animesMockData2;
    }
    return data;
  }

  showAnimesOrMock = () => {
    const { animes = [] } = this.props;
    const data = (animes.length > 0 && animes) || this.getMockData();

    if (data.length === 0) {
      return null;
    }
    return data.map((anime) => {
      return <PollsOption key={anime.id} anime={anime} onChange={this.props.handleInputChange} />
    });
  }

  render() {
    return (
      <div className="polls-optionList">
        { this.showAnimesOrMock() }
      </div>
    );
  }
}

export default PollsContent;