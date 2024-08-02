// frontend/src/main.jsx
import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


