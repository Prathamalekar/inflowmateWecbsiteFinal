import { ConnectionStates } from "mongoose";
import React, {useState} from "react";
function Form(){
    const [state,setstate]=useState({
        first:"",
        last:"",
        company:"",
        bussinessEmail:"",
        useCase:""
    })
    const handleClick = (event)=>{
        const data = {...state};
        data[event.target.id] = event.target.value;
        console.log(event.target.id)
        setstate(data);
        

    }
    const handleSubmit=async (event)=>{       
        event.preventDefault()
        const response = await fetch("/login/submit", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(state)
        }
        )
        console.log(response)
        
        const data = await response.json();
        if(response.status==200){
            console.log("Submitted successfully!!")
        }
    }
    return(
        <div className="form-container">
            <p className="Lets-begin"> Let’s begin!</p>
             <p className="replace-form">Email: Inflowmateofficial@gmail.com</p>
             <p className="replace-form">Phone: +91 986713960</p>
             <p className="replace-form">Instagram: Inflowmateofficial</p>
             <p className="replace-form">LinkedIn: Inflowmateofficial</p>
             <p className="replace-form">Office: Sai Datta, 2202, Wadala, Mumbai-400037, India</p>
            
        </div>

    )
}
export default Form;