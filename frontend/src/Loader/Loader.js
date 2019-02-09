import React from 'react';
import './Loader.css';

const Loader = ()=>{
    return (
        <div style={{height: '100vh', width: '100vw', background: '#242424', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader;