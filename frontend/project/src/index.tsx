import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './components/main-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
