import React from 'react';
import './Footer.css';
import video from '../../images/video.png';
import like from '../../images/heart.png';
import locate from '../../images/locate.png';

const Footer = () => {
    return (
        <div className='footer flex'>
            <div className='option'>
                <img title='video' className='grow' alt='' src={video} />
            </div>
            <div className='option'>
                <img title='like' className='grow' alt='' src={like} />
            </div>
            <div className='option'>
                <img title='location' className='grow' alt='' src={locate} />
            </div>
        </div>
    );
}
 
export default Footer;