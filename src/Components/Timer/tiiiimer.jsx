import React, { useEffect, useState } from "react";


const Timeer = () => {
    const [second,setSecond] = useState(0)
    const [minute,setMinute] = useState(3)
useEffect(()=>{setTimeout(() => {
    if(second>0){
        setSecond(second-1)
        localStorage.setItem('second', JSON.stringify(second));
        return
    }
    if(minute>0){
        setMinute(minute-1)
        setSecond(59)
        localStorage.setItem('second', JSON.stringify(59));
        localStorage.setItem('minute', JSON.stringify(minute));
        
    }
}, 1000);},[second])

useEffect(() => {
    const second = JSON.parse(localStorage.getItem('second'));
    const minute = JSON.parse(localStorage.getItem('minute'));
   
     setSecond(second);
     setMinute(minute)
   
  }, []);

    return ( <div>{minute}:{second}</div> );
}
 
export default Timeer;