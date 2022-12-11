// import logo from './logo.svg';
// import { BrowserRouter } from 'react-router-dom';
import './App.css';
import logo1 from './logo.jpg';
import {Link} from "react-router-dom";
// import Login from "./Login";
// import Home from './Home';
// import About from './About';
// import Products from './Products';
//import {useNavigate} from 'react-router-dom';
// import Register from './Register';


function App() {
  return (
    
    <div className='App'>

      <div style={{paddingLeft:"800px",backgroundColor:"#00008B",padding:"15px"}}>
          {/* <a href="/Login">Login</a> */}
          <div style={{marginRight:"1200px",paddingLeft:"100px"}}>
          <Link style={{color:"white",paddingRight:"20px",fontSize:"25px",textDecoration:'none'}} to="/home" >Home</Link>
          <Link style={{color:"white",paddingRight:"20px",fontSize:"25px",textDecoration:'none'}} to="/about">About</Link>
          <Link style={{color:"white",fontSize:"25px",textDecoration:'none'}} to="/products">Products</Link>
          <Link to="/register" style={{fontSize:"25px",textDecoration:'none',marginLeft:"1300px",fontFamily:"Lucida Console",padding:"10px",border:"5px",borderRadius:"3px",backgroundColor:"yellow"}}>Register</Link>
          </div>
          </div>
      <img src={logo1} style={{marginTop:"100px"}} alt="Public Greivance"/>
      <h1>Portal for</h1>
      <h1 style={{fontSize:"70px"}}>Public Greivance</h1>
      {/* <BrowserRouter> */}
        {/* <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
