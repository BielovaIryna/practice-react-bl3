import React from 'react';
import css from './WordsFilter.module.css';

export default function WordsFilter() {
  return (
    <div>
      <label className={css.label}>
        <input className={css.input} type="text" placeholder="Search" />
      </label>
    </div>
  );
}
