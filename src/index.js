import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import LogInForm from './logincomponent';

import { useState } from 'react';
import { createContext } from 'react';
import { render } from '@testing-library/react';
import LoginScreen from './logincomponent';
import App from './App';






const root = ReactDOM.createRoot(document.getElementById('root'));


//renders the provider class that provides loginform and gives us the token and such
root.render(<App/>);


       
  











