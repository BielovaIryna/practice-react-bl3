import React, { Component } from 'react';
import css from './WordsListItem.module.css';
export default class WordsListItem extends Component {
  render() {
    const { ukWord, enWord } = this.props.word;
    const { numberOfItem, handleDelete } = this.props;

    return (
      <tr>
        <td>
          <input type="checkbox" name="selectAll" />
        </td>
        <td>{numberOfItem}</td>
        <td>{enWord}</td>
        <td>{ukWord}</td>
        <td>
          <button
            type="button"
            onClick={handleDelete}
            className={css.btnActions}
          >
            Delete
          </button>
        </td>
        <td>
          <button type="button" className={css.btnActions}>
            Edit
          </button>
        </td>
      </tr>
    );
  }
}
