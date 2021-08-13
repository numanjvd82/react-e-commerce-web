import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
