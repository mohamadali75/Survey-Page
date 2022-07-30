import React from "react";
import Timeer from "../Timer/tiiiimer";
import { useNavigate,Link } from "react-router-dom";
import {motion} from "framer-motion"
import image from "../additional/pic.png"


const Question2 = () => {
    
    let navigate = useNavigate();
    const text = JSON.parse(localStorage.getItem('input'));
    return (  <div style={{
       backgroundImage: 
       `url(${image})`,
       height:'100vh',
     
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
   }}> < motion.div className="ques" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}> <p>Whats Your Name?</p>
    <input onChange={(e)=>{localStorage.setItem('input', JSON.stringify(e.target.value));}}  type="text"  value={text}/>
    
 <br/>
 <button className="link" onClick={() => navigate(-1)}>Back</button> <button><Link className="link" to="3">Next</Link></button>
 <Timeer/>
</motion.div></div>
        
       );
}
 
export default Question2;