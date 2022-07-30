import React from 'react';

import TodoGoalItem from '../TodoGoalItem/TodoGoalItem';
import './TodoGoalList.css';

const TodoGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <TodoGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </TodoGoalItem>
      ))}
    </ul>
  );
};

export default TodoGoalList;
