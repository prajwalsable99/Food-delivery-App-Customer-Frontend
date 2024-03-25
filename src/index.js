import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';


const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'black',
        color: 'white',
      },
    },
  },
  colors: {
    customOrange: {
      500: '#FFA500', // Adjust the color value to your desired shade of orange
    },
  },
});


export default theme;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <ChakraProvider theme={theme}>

        <Provider store={store}>

          <App />
        </Provider>

      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);


