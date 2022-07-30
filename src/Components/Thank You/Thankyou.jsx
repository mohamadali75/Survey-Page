import React from 'react';
import image from "../additional/pic.png"
const Thankyou = () => {
    return ( <div style={{
        backgroundImage: 
        `url(${image})`,
        height:'100vh',
        
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}><div className='ques'>Thank you</div></div> );
}
 
export default Thankyou;
