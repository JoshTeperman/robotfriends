import React from 'react';
import Card from './Card.js'


let CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((robot, i) => {
          return (
            <Card 
              key={i} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email} 
              />
          );
        })
      }
    </div>
  )
}

export default CardList;

// CardList component that lists cards, and all we need to do is pass it a prop that lists robots
// CardList receives robots from index.js -> import { robots } from robots.js. it's also available in the props