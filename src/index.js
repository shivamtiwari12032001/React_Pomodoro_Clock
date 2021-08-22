import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import SettingsContextProvider from './context/SettingContext';

ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById('root')
);



