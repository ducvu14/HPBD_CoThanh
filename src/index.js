import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Nếu bạn không muốn sử dụng reportWebVitals, bạn có thể xóa hoặc comment out dòng dưới đây
// reportWebVitals();