import React from 'react';
import './Body.css';
import black from '../../images/black.jpg';
import women from '../../images/women.jpg';

const Body = () => {
    return (
        <div className='torso'>
            <div className='cont'>
                <div className='img'><img alt='' src={black} /></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 est laborum.</p>
                <button className='grow'>READ MORE</button>
            </div>
            <div className='cont'>
                <div className='img'><img alt='' src={women} /></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 est laborum.</p>
                <button className='grow'>READ MORE</button>
            </div>
        </div>
    );
}
 
export default Body;