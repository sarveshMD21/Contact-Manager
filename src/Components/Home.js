import React from 'react'
import {useState,useEffect} from 'react'
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home() {
    const [contact,setContact]=useState(null);

    useEffect(()=>{
      //console.log("render");
      fetch("http://localhost:3000/contact")
      .then(res=>{
        return res.json();})
      .then(data=>{
        //console.log(data);
        setContact(data);
      })
    },[])
  
    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
              <h1>Contact Manager</h1>
            </div>
            <div className="d-flex justify-content-end ">
               <Link className="btn btn-primary" to="/new">Add New Contact</Link>
            </div>
            <div className="d-flex flex-row  bd-highlight m-4 justify-content-between ">
                 <h2>Name</h2>
                 <h2>Phone</h2>
                 <h2>Options</h2>
            </div>
        {contact&&contact.map((data)=>{
          const {id,name,company,email,phone} = data;
          return(
            <Contact name={name} phone={phone} id={id}></Contact>
          );
        })}
        </div>
    )
}
