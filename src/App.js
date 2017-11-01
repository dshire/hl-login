import React from 'react';
import './App.css';
import BlueNav from './navbar';

function App(props){
    return (
        <div className="react-container">
            <BlueNav/>
            <div className="main">
                {props.children}
            </div>
        </div>
    );
}

export default App;
