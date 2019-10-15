import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Container, Checkbox, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import s from './questionComponent.module.scss';

const Question = (props) => {
  // debugger
  
  const [answer, setAnswer] = useState(null);

  const [checked, setChecked] = useState(null);
  useEffect(() => {
    setChecked(checked)
  }, [checked])

  let onChange = (event) => {
    setAnswer(event.target.value)
  }

  let radioElement = props.data.allAnswers.map(e => {
    return <FormControlLabel
    onChange={onChange} 
    value={e} 
    control={<Radio />} 
    label={e}
    key={e.id} />
  })

  let onNextStepQuestion = () => {
    if (answer && answer === props.data.rightAnswer) {
      props.setPoint(1)
    } else {
      props.setPoint(null)
    }
    setChecked(false)
    console.log(props.totalPoints.length)
    props.nextQuestion(props.counter);
  }
  console.log(checked)

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