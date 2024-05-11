import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

//NPM Dev dependencies
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Imported Component Pages
import App from './App';
// import Home from './Home';

const router = createBrowserRouter([
  //Page Objects
  {
    path: '/afr/',
    element: <App />,
    errorElement: <div> 404 Not Found </div>
  },
  // {
  //   path: '/afr/home',
  //   element: <Home />
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
