import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.scss';
import {initializeApp} from 'firebase/app';
import {initializeAppCheck, ReCaptchaV3Provider} from 'firebase/app-check';

const app = initializeApp({
    apiKey: "AIzaSyBG8NafQofyrAmVbbvZioAkKqmDWQ_gxSA",
    authDomain: "mgs-mun.firebaseapp.com",
    projectId: "mgs-mun",
    storageBucket: "mgs-mun.appspot.com",
    messagingSenderId: "980138263525",
    appId: "1:980138263525:web:a8c0ac874784232563250c",
});

initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LdAfqMcAAAAAPoYL0N7fLBbNHGD-CmVuFj86u3v'),
    isTokenAutoRefreshEnabled: true,
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
