import React from 'react';
import css from './WordsFilter.module.css';

export default function WordsFilter({ filter, handleInputChange }) {
  return (
    <div>
      <label className={css.label}>
        <input
          className={css.input}
          type="text"
          placeholder="Search"
          value={filter}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}
