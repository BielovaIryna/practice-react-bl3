import React, { Component } from 'react';

export default class WordsListItem extends Component {
  render() {
    const { ukWord, enWord } = this.props.word;

    return (
      <tr>
        <td>
          <input type="checkbox" name="selectAll" />
        </td>
        <td>#{}</td>
        <td>{enWord}</td>
        <td>{ukWord}</td>
        <td>
          <button type="button" onClick={this.props.handleDelete}>
            Delete
          </button>
        </td>
        <td>
          <button type="button">Edit</button>
        </td>
      </tr>
    );
  }
}
