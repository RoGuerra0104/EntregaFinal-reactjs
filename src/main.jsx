import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCI-oA7uY0CAArZljTW99z3jlKfdiyX5wM",
  authDomain: "zeus-ecommers.firebaseapp.com",
  projectId: "zeus-ecommers",
  storageBucket: "zeus-ecommers.appspot.com",
  messagingSenderId: "510520127328",
  appId: "1:510520127328:web:9ce173b7ab27153d4e3805"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
