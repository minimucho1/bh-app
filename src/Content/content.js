import React, { Component } from 'react';

import Polls from './Polls/polls';
import './content.scss';

// Will add routes in the future

class Content extends Component {
  render() {
      return (
        <main className="body">
          <div className="body-container">
            <Polls />
          </div>
        </main>
      );
  }
}

export default Content;