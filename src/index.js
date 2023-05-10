import React from 'react';
import ReactDOM from 'react-dom/client';

/** Vendor CSS Files */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/dist/css/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'swiper/swiper-bundle.min.css'

/** Template Main CSS Files */
import './index.css';

import reportWebVitals from './reportWebVitals';

import { Header } from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
