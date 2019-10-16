import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Typography,RadioGroup} from '@material-ui/core';
import s from './questionComponent.module.scss';

const Question = (props) => {
  // debugger
  
  const [answer, setAnswer] = useState(null);

  let onChange = (event) => {
    console.log(event.target.innerHTML)
    setAnswer(event.target.innerHTML)
  }

  let radioElement = props.data.allAnswers.map((e, index) => {
    return <p 
    className={s.answer + " " + (e === answer ? s.target : '')}
    onClick={onChange}
    key={index}
    >{e}</p>
  })

  let onNextStepQuestion = () => {
    setAnswer(null)
    if (answer && answer === props.data.rightAnswer) {
      props.setPoint(1)
    }
    if (!answer || (answer !== props.data.rightAnswer)) {
      const failedAnswer = {
        failed: answer,
        right: props.data.rightAnswer,
        id: props.data.id
      }
      props.setFailedAnswer(failedAnswer)
    }
    props.counter === 11 ? props.nextQuestionStep() : props.nextQuestion(props.counter);
  }
  return (
    <Card >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Вопрос
          </Typography>
          <Typography component="p">
            {props.data.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={s.CardActionsContainer} >
        <RadioGroup name="question" >
          {radioElement}
        </RadioGroup>
        <Button
        onClick={onNextStepQuestion}
         size="small" color="primary">
          Ответить
        </Button>
      </CardActions>
    </Card>
  );
}

export default Question;