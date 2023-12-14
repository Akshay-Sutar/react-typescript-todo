import { createContext, useState, PropsWithChildren } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

interface FunctionalComponent extends PropsWithChildren {}

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<FunctionalComponent> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(text)));
  };

  const onDeleteTodoHandler = (id: String) => {
    let filteredTodos = todos.filter((x) => x.id !== id);
    setTodos(filteredTodos);
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: onAddTodoHandler,
    removeTodo: onDeleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
