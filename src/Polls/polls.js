import React, { Component } from 'react';

import PollsDropdown from './pollsDropdown';
import PollsContent from './pollsContent';
import { defaultDropdownValue } from './pollsConstants';
import './polls.scss';

class Polls extends Component {
  constructor() {
    super();
    this.state = {
      dropdownValue: defaultDropdownValue,
      selectedValues: {}
    }
  }

  handleChange = (e) => {
    this.setState({ dropdownValue: e.target.value });
  }

  handleInputChange = (e) => {
    const newValues = {
      ...this.state.selectedValues,
      [e.target.name]: e.target.checked
    };
    this.setState({ selectedValues: newValues })
  }

  handleSubmit() {
    // TODO: Submit data to back-end
    console.log('TODO: Submit data to back-end');
  }

  render() {
    const { dropdownValue } = this.state;
    const { options } = this.props;

    return (
      <>
        <PollsDropdown options={options} dropdownValue={dropdownValue} handleChange={this.handleChange} />
        {dropdownValue !== defaultDropdownValue &&
          <>
            <div className="polls-container">
              <PollsContent handleInputChange={this.handleInputChange} dropdownState={this.state.dropdownValue} />;
            </div>
            <button className="polls-submit" onClick={this.handleSubmit}>Submit</button>
          </>
        }
      </>
    );
  }
}

export default Polls;