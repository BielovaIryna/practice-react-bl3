import React, { Component } from 'react';
import WordsForm from 'components/WordsForm/WordsForm';
import WordsList from 'components/WordsList/WordsList';
import WordsFilter from './WordsFilter/WordsFilter';
export class App extends Component {
  state = {
    words: [],
    filter: '',
  };
  handleAddWord = newWord => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, newWord],
      };
    });
  };

  handleDelete = wordId => {
    this.setState(prevState => ({
      words: prevState.words.filter(word => word.id !== wordId),
    }));
  };

  render() {
    return (
      <div>
        <WordsForm handleAddWord={this.handleAddWord} />
        <WordsFilter />
        <WordsList words={this.state.words} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
