import React, {Suspense} from 'react';
import { createRoot } from 'react-dom/client';
import "./i18n";
import App from './App';

createRoot(document.getElementById('root')).render(
    <Suspense fallback={<div style={{fontSize:"50px", backgroundColor:"red"}}>loading...</div>}>
        <App/>
    </Suspense>
);