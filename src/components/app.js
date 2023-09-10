import react, { useState } from "react";
import Product from "./Product";
import ContactSales from "./contactsales"
import Registration from "./registrationPage";
import Component1 from "./component1";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Element } from 'react-scroll';
import Aos from "aos";
import { useEffect} from "react";
import "aos/dist/aos.css";
import NavbarSmallScreen from "./navbarsmall";
import NavbarLarge from "./navbarlarge";
import Features from "./features";



// function HeaderView() {
//   const location = useLocation();
//   console.log(location.pathname);
//   return <span>Path : {location.pathname}</span>
// }
// HeaderView()



function App(){    
    const divList = document.querySelectorAll("div");
    for(let i =0;i<divList.length;i++){
        divList[i].setAttribute("data-aos", "fade-in")
    }
      
    useEffect(() => {
      Aos.init({
        offset:200,
        duration:100
      });
      Aos.refresh();
     }, []);
    return(
      <div>
      
       
         <div>
            {window.innerWidth<=600?<NavbarSmallScreen/>:<NavbarLarge/>}  
            
                        
            
             
             
            <Element name="product">
                 <Component1/>
               </Element>
               <Element name="features">
                 <Product/>
               </Element>
               <Element name="benefits">
                <ContactSales/>         
               </Element> 
               <Element name="contactsales">
                 <Registration/>
                 

               </Element>
            
            <div>             

             </div>


          
         </div>
      
      </div>
    )
    
  

}

export default App;