import React, { Component } from 'react'
import WordsForm from 'components/WordsForm/WordsForm'
import WordsList from 'components/WordsList/WordsList'
import WordsFilter from './WordsFilter/WordsFilter'
export class App extends Component {
state ={
  words: [],
  filter: ""
}
handleAddWord =(newWord) => {
  this.setState((prevState)=>{
    return {
      words: [...prevState.words,newWord]
    }
  })
}
  render() {
    return (
      <div>
        <WordsForm
        handleAddWord={this.handleAddWord}/>
	      <WordsFilter/>
	      <WordsList/>
      </div>
    )
  }
}

