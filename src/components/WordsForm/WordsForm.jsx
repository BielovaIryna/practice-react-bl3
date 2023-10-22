import React, { Component } from 'react';

export default class WordsForm extends Component {
  state = {
    enWord: '',
    ukWord: '',
  };
  handleSubmit = (e) => {
	e.preventDefault();
	this.props.handleAddWord(this.state);
  }
  render() {
    return (
      <form action="" className="words-form" onSubmit={this.handleSubmit}>
        <label htmlFor="" className="en-word">
          <input type="text" className="en-word-input" />
        </label>
        <label htmlFor="" className="en-word">
          <input type="text" className="en-word-input" />
        </label>
		<button type='submit' className='submit-button'>Submit</button>
      </form>
    );
  }
}
