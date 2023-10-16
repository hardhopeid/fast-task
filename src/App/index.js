import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import React from 'react';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
