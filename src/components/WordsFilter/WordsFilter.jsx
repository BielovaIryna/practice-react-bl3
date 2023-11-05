import React from 'react';

export default function WordsFilter() {
  return (
    <div>
      <label className={css.label}>
        <input className={css.input} type="text" placeholder="Search" />
      </label>
    </div>
  );
}
