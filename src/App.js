import React from 'react';
import './App.css';
import Question from './components/questionComponent';
import { nextQuestion, nextQuestionStep, setPoint } from './redux/test-reducer';
import * as reactRedux from 'react-redux';
import { requestQuestions } from './reselect/questions-selector';
import { numberEngine, questionsCount } from './config';

class App extends React.Component {

  componentDidMount() {
    if (this.props.counter === 1) {
      this.props.nextQuestion(this.props.counter)
    }
  }

  render() {
    console.log(this.props.counter)
    return (
      <div className="App">
        {this.props.counter === numberEngine && <div>
          <h1>Вы набрали {this.props.totalPoints.length} балов</h1>
          <p>Правильных {this.props.totalPoints.length}</p>
          <p>Неправильных {questionsCount - this.props.totalPoints.length}</p>
        </div>}
        { (this.props.data && this.props.counter !== numberEngine) && <Question
         {...this.props} />}
        { !this.props.data && <div>
          Загрузка...
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: requestQuestions(state),
    isLoading: state.test.isLoading,
    counter: state.test.counter,
    totalPoints: state.test.totalPoints
  }
}

const mapDispatchToProps = {
  nextQuestion,
  nextQuestionStep,
  setPoint
}

export default reactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
