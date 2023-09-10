import React from "react";
import { Divide as Hamburger } from 'hamburger-react'
import inflowmate from "../image/inflowmate.png";
import { Link as ScrollLink} from 'react-scroll';
import { useState,useEffect,useRef } from "react";
const targetElem = document.getElementsByClassName("anchor-container")


function NavbarSmallScreen(){
  const [showAnchors, setShowAnchors] = useState(false);
  const [stateButton, setstateButton] = useState(false)


  const buttonRef = useRef(null);
  const toggleHamburger = () => {
    setstateButton(!stateButton);
  };


  
  const renderAnchors = () => {
    if (!showAnchors) {
      return null;
    }

    
    function handelChange(){
      setTimeout(()=>{setShowAnchors(false);
      setstateButton(!stateButton)
       
      
      
      },500)
      
    }
   
   

    // Render four anchor tags
    return (
      
      <div style={{top: "0",zIndex: "1000",position:"fixed",width:"100%"}} >
        <nav className="anchor-container" id="ul"  style={{background:"white"}}>
          <li><ScrollLink to="product"  onClick={handelChange} smooth={true} offset={-80} duration={1000}>Product</ScrollLink></li>
          <li><ScrollLink to="features" onClick={handelChange} smooth={true} offset={-80} duration={1000}>Features</ScrollLink></li>
          <li><ScrollLink to="benefits" onClick={handelChange} smooth={true} offset={-80} duration={1000}>Benefits</ScrollLink></li>
          <li><ScrollLink to="contactsales" onClick={handelChange} smooth={true} offset={-10} duration={1000}>Contact Sales</ScrollLink></li>
       </nav>

      </div>
    );
  };
  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      // Clicked outside the button, so close the div
      setShowAnchors(false);
    }
  };


    return <>
    <div className="navbarSmallScreen">
      <div class="container-navbarsmall">
        <img class="image-navbarsmall" src={inflowmate} alt="Your Image"/>
        <button ref={buttonRef} ><Hamburger size={20} color="#52525b" toggled={stateButton} toggle={toggleHamburger} onToggle={(toggled) => {
           if (toggled) {
             setShowAnchors(true)
           }
            else {
             setShowAnchors(false)
            }

    }} /></button>
        
      </div>
      <div>
         {renderAnchors()}
      </div>
    </div>
    </>
}

export default NavbarSmallScreen;