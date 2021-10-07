import React from 'react'
import { useParams } from 'react-router'
import {useState,useEffect} from 'react'
import Profile from './Profile';
export default function View() {
    const {id}=useParams();
    let val=id;
    const [obj,setObj]=useState(null);
    
    useEffect(()=>{
        fetch("http://localhost:3000/contact")
        .then(res=>{
            return res.json();})
        .then(data=>{
          setObj(data);})
    },[])
   
    return (
        <div className="d-flex flex-row  justify-content-center">
           {obj&&obj.map((data)=>{
          const {id,name,company,email,phone} = data;
          if(id==val)
          return(
             <Profile name={name} email={email} company={company}
             phone={phone}></Profile>
          );
        })}
        </div>
    )
}
