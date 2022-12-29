import React from 'react';
import './App.css'
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';

import DataProvider from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


