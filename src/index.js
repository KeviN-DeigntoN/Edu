import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
