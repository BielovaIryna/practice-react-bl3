import React, { Component } from 'react';
import WordsForm from 'components/WordsForm/WordsForm';
import WordsList from 'components/WordsList/WordsList';
import WordsFilter from './WordsFilter/WordsFilter';
export class App extends Component {
  state = {
    words: [],
    filter: '',
    numberComponent: 0,
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

  increaseNumberComponent = () => {
    this.setState(prevState => ({
      numberComponent: prevState.numberComponent + 1,
    }));
  };

  render() {
    return (
      <div>
        <WordsForm
          handleAddWord={this.handleAddWord}
          increaseNumberComponent={this.increaseNumberComponent}
        />
        <WordsFilter />
        <WordsList
          words={this.state.words}
          numberComponent={this.state.numberComponent}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
