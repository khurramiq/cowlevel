import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('react-root')
);
reportWebVitals();
