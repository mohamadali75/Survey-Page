import React from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';
import App from '../App/App';
import Question1 from '../Question/Question1';
import Question2 from '../Question/Question2';
import Question3 from '../Question/Question3';
import Thankyou from '../Thank You/Thankyou';
import {AnimatePresence} from 'framer-motion' 

const Animation = () => {
    const location = useLocation()
    return (  
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>

        <Route path='/' element={<App/>} />    
        <Route path='/1' element={<Question1/>} />  
        <Route path='/1/2' element={<Question2/>} /> 
        <Route path='1/2/3' element={<Question3/>} /> 
        <Route path='1/2/3/thankyou' element={<Thankyou/>} /> 
         </Routes>
         </AnimatePresence> );
}
 
export default Animation;