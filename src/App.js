import React from 'react';
/* 
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; */



import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';


import { ControladorDeRotas } from './Routes/Route.jsx';

function App() {
  return (
    <BrowserRouter>
    
      <ControladorDeRotas />

    </BrowserRouter>
       
  );
}
export default App;

