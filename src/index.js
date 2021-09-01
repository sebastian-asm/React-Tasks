import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { TodoProvider } from './context/TodoContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
