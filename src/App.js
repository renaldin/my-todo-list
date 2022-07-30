import React, { useState } from 'react';

import TodoGoalList from './components/TodoGoals/TodoGoalList/TodoGoalList';
import TodoInput from './components/TodoGoals/TodoInput/TodoInput';
import './App.css';

const App = () => {
  const [todoGoals, setTodoGoals] = useState([
    { text: 'Coding !', id: 'g1' },
    { text: 'Reading !', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setTodoGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setTodoGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No todo list.</p>
  );

  if (todoGoals.length > 0) {
    content = (
      <TodoGoalList items={todoGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <TodoInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
