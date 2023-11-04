import WordsListItem from 'components/WordsListItem/WordsListItem';
import React from 'react';
import css from './WordsList.module.css';

export default function WordsList({ words, handleDelete }) {
  // const newHandleDelete = id => () => handleDelete(id);
  return (
    <div>
      <div className={css.tableContainer}>
        <table>
          <th>All</th>
          <th>NUMBER</th>
          <th>EN WORD</th>
          <th>UK WORD</th>
          <th>ACTIONS</th>
          <th>ACTIONS </th>
          {words.map(word => {
            return (
              <WordsListItem
                key={word.id}
                word={word}
                handleDelete={() => handleDelete(word.id)}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
}
