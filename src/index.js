import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";


import App from './App';
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
