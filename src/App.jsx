import React from 'react';
import Sidebar from './layout/Sidebar';
import { BrowserRouter } from "react-router-dom";
import Routing from './routes';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar />
                <Routing />
            </BrowserRouter>
        </div>
        
    )


}
