import React from 'react';
import './App.css';
import s from './components/questionComponent.module.scss';
import Question from './components/questionComponent';
import { nextQuestion, nextQuestionStep, setPoint, setFailedAnswer } from './redux/test-reducer';
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
    console.log(this.props.failedAnswers)
    console.log(this.props.totalPoints.length)
    return (
      <div className="App">
        {this.props.counter === numberEngine && <div>
          <h1>Вы набрали {this.props.totalPoints.length} балов</h1>
          <p>Правильных {this.props.totalPoints.length}</p>
          <p>Неправильных {questionsCount - this.props.totalPoints.length}</p>
          <div className={s.headTable}>
            <p>Номер вопроса</p>
            <p>Ваш ответ</p>
            <p>Правильный ответ</p>
          </div>
          {this.props.failedAnswers.length > 0 && this.props.failedAnswers.map((e, index) => {
            return (
              <div className={s.failedQue} key={index}>
                <p>{e.id}</p>
                <p>{e.failed === null ? 'Нет ответа' : e.failed}</p>
                <p>{e.right}</p>
              </div>
            );
          })}
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
    totalPoints: state.test.totalPoints,
    failedAnswers: state.test.failedAnswers
  }
}

const mapDispatchToProps = {
  nextQuestion,
  nextQuestionStep,
  setPoint,
  setFailedAnswer,
}

export default reactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
