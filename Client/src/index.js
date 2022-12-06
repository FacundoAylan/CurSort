import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import {initializeApp} from "firebase/app"
import store from './Redux/store/index.js';
import { Provider } from 'react-redux';


const firebaseConfig = {
  apiKey: "AIzaSyAqUT6R11VU6V7IBJUpDDrHqtc_DEFDcJo",
  authDomain: "courses-36a1a.firebaseapp.com",
  projectId: "courses-36a1a",
  storageBucket: "courses-36a1a.appspot.com",
  messagingSenderId: "8738977481",
  appId: "1:8738977481:web:3204259ef320357bf83f18"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const domain = 'dev-ja3xbcn2aoqj38h2.us.auth0.com';
const client_id = 'p8fIi6RZqrKmOfH00a8p4nOJRQna4xmJ';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={client_id}
      redirectUri={window.location.origin}
    >
      <ChakraProvider>
        <BrowserRouter>

          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ChakraProvider>


    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
