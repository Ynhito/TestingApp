import React, {useEffect, useState} from 'react';
import './App.css';
import Question from './components/questionComponent';
import { nextQuestion } from './redux/test-reducer';
import * as reactRedux from 'react-redux';
import { requestQuestionsSort } from './reselect/questions-selector';

class App extends React.Component {

  componentDidMount() {
    this.props.nextQuestion()
  }
  debugger
  render() {
    return (
      <div className="App">
        { this.props.data && <Question {...this.props} />}
        { !this.props.data && <div>
          Загрузка...
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: requestQuestionsSort(state),
    isLoading: state.test.isLoading
  }
}

const mapDispatchToProps = {
  nextQuestion
}

export default reactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
