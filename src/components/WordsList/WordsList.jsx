import WordsListItem from 'components/WordsListItem/WordsListItem';
import React from 'react';

export default function WordsList({ words, handleDelete }) {
  // const newHandleDelete = id => () => handleDelete(id);
  return (
    <div>
      WordsList
      <ul>
        {words.map(word => {
          return (
            <WordsListItem
              key={word.id}
              word={word}
              handleDelete={() => handleDelete(word.id)}
            />
          );
        })}
      </ul>
    </div>
  );
}
