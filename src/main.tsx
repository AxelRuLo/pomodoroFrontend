import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='bg-white text-center'>
            <h1>MAIN</h1>
        </div>
    </StrictMode>
);
