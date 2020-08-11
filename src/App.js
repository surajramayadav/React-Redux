import React from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './components/book';
import { Provider } from 'react-redux';
import Store from './redux/store'
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
     <Book/>
    </div>
    </Provider>
  );
}

export default App;
