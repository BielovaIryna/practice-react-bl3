import React, { Component } from 'react';

export default class WordsListItem extends Component {
  render() {
    const { ukWord, enWord } = this.props.word;

    return (
      <li>
        <span>{ukWord}</span>
        <br />
        <span>{enWord}</span>
        <button type="button" onClick={this.props.handleDelete}>
          Delete
        </button>
      </li>
    );
  }
}
