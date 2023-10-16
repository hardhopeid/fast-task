/* import logo from './platzi.webp';*/
import { AppUI } from './AppUI';
import React from 'react';
import './App.css';
import { useLocalStorage } from './useLocalStorage';

/* 
const defaultTodos = [
  {text: 'Cortar Sebolla', completed: true},
  {text: 'Comer mucho', completed: false},
  {text: 'Darle amor a mi amorcito', completed: false},
  {text: 'Dormir un poco', completed: false},
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
*/
function App() {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );



  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI 
        loading={loading}
        error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
