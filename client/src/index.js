import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './components/AuthContext/AuthContext';

ReactDOM.render(
  <AuthProvider>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </AuthProvider>,
  document.getElementById('root')
);
