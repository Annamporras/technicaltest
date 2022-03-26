import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PictureProviderWrapper } from './Context/pictures.context';


ReactDOM.render(
  <Router>
    <PictureProviderWrapper>
      <App />
    </PictureProviderWrapper>
  </Router>,
  document.getElementById('root')
)
