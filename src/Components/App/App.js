
import './App.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import image from "../additional/pic.png"




function App() {
  return (
    <div style={{
      backgroundImage: 
      `url(${image})`,
      height:'100vh',
      
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  }}>
     <Link className='link' to="1"><Button className='button' onClick={console.log('salam')} variant="dark">Start The Survey</Button></Link>
     
    
     </div>
    
  );
}

export default App;
