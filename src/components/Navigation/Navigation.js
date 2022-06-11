import React from 'react';
import './Navigation.css';

const Navigation = () => {

    return (
        <div className='nav-cont'>
            <nav>
                <h2 className='white title'>GWIA Connect</h2>
                <div className='ham'>
                    <div className='hamburger'>
                        <label htmlFor="check">
                            <input 
                                type="checkbox" 
                                id="check"
                                onClick={()=>{
                                    document.querySelector('.nav').classList.toggle("div")
                                    document.querySelector('.nav').classList.toggle("show")
                                }}
                            /> 
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
            </nav>
                    <div className='nav div'>
                        <h2>GWIA DAO</h2>
                        <h2>News</h2>
                        <h2>Wallet</h2>
                        <h2>Academics</h2>
                        <h2>Club Boss</h2>
                        <h2>Settings</h2>
                    </div>
        </div>
    );
}
 
export default Navigation;