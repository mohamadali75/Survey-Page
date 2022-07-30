import React, {useEffect, useState} from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import image from "../additional/pic.png"


import "./question.css"
import Timeer from "../Timer/tiiiimer";





const Question1 = () => {

  
    
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Germany', value: '1' },
      { name: 'France', value: '2' },
      { name: 'Italy', value: '3' },
    ];
  useEffect(()=>{setRadioValue(JSON.parse(localStorage.getItem('gozine')))},[])

    return ( <div style={{
      backgroundImage: 
      `url(${image})`,
      height:'100vh',
      
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  }}> <motion.div className="ques"  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} > <p>2018 World Cup Winner?</p>
         <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {setRadioValue(e.currentTarget.value);
                localStorage.setItem('gozine', JSON.stringify(e.currentTarget.value))}}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br/>
      <button><Link className="link" to="2">Next</Link></button>
      <Timeer/>
    </motion.div> </div>);
}
 
export default Question1;