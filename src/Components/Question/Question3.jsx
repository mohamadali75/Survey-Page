import React from "react";
import Timeer from "../Timer/tiiiimer";
import { useNavigate ,Link} from "react-router-dom";
import {motion} from "framer-motion" 
import image from "../additional/pic.png"



const Question3 = () => {
    
    let navigate = useNavigate();
    let chkbox = JSON.parse(localStorage.getItem('check'));
    let chkbox2 = JSON.parse(localStorage.getItem('check2'));
    let chkbox3 = JSON.parse(localStorage.getItem('check3'));
    const handleChange =()=>{localStorage.setItem('check', JSON.stringify(!chkbox));}
    const handleChange2 =()=>{localStorage.setItem('check2', JSON.stringify(!chkbox2));}
    const handleChange3 =()=>{localStorage.setItem('check3', JSON.stringify(!chkbox3));}

    return ( <div style={{
      backgroundImage: 
      `url(${image})`,
      height:'100vh',
      
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  }}> <motion.div className="ques" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
    <form>
    Which one(ones) you like?
    <br/>
    <input type="checkbox" defaultChecked={chkbox} onChange={handleChange} />
  <label for="vehicle1"> Ebi</label><br/>
  <input type="checkbox" defaultChecked={chkbox2} onChange={handleChange2} />
  <label for="vehicle2"> Siavash</label><br/>
  <input type="checkbox" defaultChecked={chkbox3} onChange={handleChange3} />
  <label for="vehicle3"> Shadmehr</label><br/><br/>
</form>

 <br/>
 <button className="link" onClick={() => navigate(-1)}>Back</button> <button onClick={()=>{localStorage.setItem('minute', JSON.stringify(0));
 localStorage.setItem('second', JSON.stringify(0));}} className="link"><Link className="link" to="thankyou">Finish</Link></button>
 <Timeer/>
</motion.div>
</div>
        
       );
}
 
export default Question3;