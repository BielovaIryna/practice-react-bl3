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

  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  searchWord = () => {
    let searchWords = [];
    if (this.state.filter) {
      searchWords = this.state.words.filter(word =>
        word.enWord.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    } else {
      searchWords = this.state.words;
    }
    return searchWords;
  };

  render() {
    return (
      <div>
        <WordsForm handleAddWord={this.handleAddWord} />
        <WordsFilter
          filter={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        <WordsList
          // words={this.state.words}
          words={this.searchWord()}
          numberComponent={this.state.numberComponent}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
