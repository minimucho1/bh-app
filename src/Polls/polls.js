import React, { Component } from 'react';
import PollsContent from './pollsContent';
import './polls.scss';

class Polls extends Component {
  constructor() {
    super();
    this.state = {
      dropdownValue: 'Choose One...',
      selectedValues: {}
    }

    this.createOptions = this.createOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.renderContainer = this.renderContainer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  createOptions(options) {
    let optionsMarkup = [];
    options.forEach((opt, index) => {
      optionsMarkup.push(<option key={index} value={opt}>{opt}</option>)
    });
    return optionsMarkup;
  }

  handleChange(event) {
    this.setState({ dropdownValue: event.target.value });
  }

  handleInputChange(event) {
    const newValues = {
      ...this.state.selectedValues,
      [event.target.name]: event.target.checked
    };
    this.setState({ selectedValues: newValues })
  }

  handleSubmit() {
    // TODO: Submit data to back-end
    console.log('TODO: Submit data to back-end');
  }

  renderOptions() {
    const { options = ['Choose One...', 'Anime of the Season', 'Best Soundtrack'] } = this.props;

    return (options.length > 0 &&
      <select className="polls-dropdown" value={this.state.dropdownValue} onChange={this.handleChange}>
        {this.createOptions(options)}
      </select>
    );
  }

  renderContainer() {
    return <PollsContent handleInputChange={this.handleInputChange} dropdownState={this.state.dropdownValue} />;
  }

  render() {
    return (
      <>
        {this.renderOptions()}
        {this.state.dropdownValue !== 'Choose One...' &&
          <>
            <div className="polls-container">
              {this.renderContainer()}
            </div>
            <button className="polls-submit" onClick={this.handleSubmit}>Submit</button>
          </>
        }
      </>
    );
  }
}

export default Polls;