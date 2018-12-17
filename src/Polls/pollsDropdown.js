import React, { Component } from 'react';

import { defaultDropdownValue } from './pollsConstants';
import './pollsDropdown.scss';

class PollsDropdown extends Component {
  createOptions = options => {
    return options.map((option, index) => {
      return <option key={index} value={option}>{option}</option>
    });
  }

  render() {
    const { options, dropdownValue, handleChange } = this.props;

    return (options.length > 0 &&
      <select className="polls-dropdown" value={dropdownValue} onChange={handleChange}>
        {this.createOptions(options)}
      </select>
    );
  }
}

PollsDropdown.defaultProps = {
  options: [defaultDropdownValue, 'Anime of the Season', 'Best Soundtrack'],
  dropdownValue: '',
  handleChange: () => {}
};

export default PollsDropdown;