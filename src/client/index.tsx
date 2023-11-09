import React, { useRef } from 'react';
import { hydrateRoot } from 'react-dom/client';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './components/App';




// window.addEventListener('DOMContentLoaded', () => {
    const RootElement = document.getElementById('root');
    console.log("DOMContentLoaded");
    if (RootElement) {
        console.log("hydrateRoot");
        hydrateRoot(RootElement, <App />);
    }
// });


//hydrateRoot(document, <App />);