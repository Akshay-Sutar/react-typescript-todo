import React from 'react';
import Todo from '../models/todo';
import classes from './TodoItem.module.css';

export const TodoItem: React.FC<{ todo: Todo; onDeleteTodo: () => void }> = (
  props
) => {
  return (
    <li
      className={classes.item}
      key={props.todo.id}
      onClick={props.onDeleteTodo}
    >
      {props.todo.text}
    </li>
  );
};
