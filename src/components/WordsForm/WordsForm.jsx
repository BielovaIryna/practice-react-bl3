import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export default class WordsForm extends Component {
  state = {
    enWord: '',
    ukWord: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const newWord = { ...this.state, id: nanoid(5) };
    this.props.handleAddWord(newWord);
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form action="" className="words-form" onSubmit={this.handleSubmit}>
        <label htmlFor="" className="en-word">
          {' '}
          UK
          <input
            onChange={this.handleChange}
            name="ukWord"
            type="text"
            className="en-word-input"
            required
          />
        </label>
        EN
        <label htmlFor="" className="en-word">
          <input
            onChange={this.handleChange}
            name="enWord"
            type="text"
            className="en-word-input"
          />
        </label>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
  }
}
