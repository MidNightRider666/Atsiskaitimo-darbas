import React from 'react'
import Card from '../Card/Card'
import Grid from '../UI/Grid/Grid'


function CardList(props) {
  return (
    <Grid>
      {props.item.map((sObj) => (
        <Card 
        key={sObj.id}
        title={sObj.title}
        description={props.description}
        {...sObj}
        />
      ))}
    </Grid>
  );
  }
export default CardList;