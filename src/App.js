import React from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './components/book';
import { Provider } from 'react-redux';
import Store from './redux/store'
import Bookhooks from './components/Bookhooks';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
     <Book/>
     <Bookhooks/>
    </div>
    </Provider>
  );
}

export default App;
