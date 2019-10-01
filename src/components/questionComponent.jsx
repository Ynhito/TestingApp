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
  let radioElement = props.data.allAnswers.map(e => {
    return <FormControlLabel value={e} control={<Radio />} label={e} />
  })
  debugger
  console.log(props.data)

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
          <RadioGroup aria-label="gender" name="gender1" >
            {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel value="qwe" control={<Radio />} label="qwe" /> */}
            {radioElement}
          </RadioGroup>
          <Button onClick={() => console.log('hi')} size="small" color="primary">
            Ответить
        </Button>
      </CardActions>
    </Card>
  );
}

export default Question;