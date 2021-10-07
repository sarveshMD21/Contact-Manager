import React from 'react'
import {useState,useEffect} from 'react'
export default function Profile({name,email,company,phone}) {
     
     const [person,setPerson]=useState(null);
     useEffect(() => {
       fetch("https://randomuser.me/api/")
       .then(res=>{
         return res.json();
       })
       .then(data=>{
        let user=data.results;
        user.forEach(element => {
           setPerson(element.picture.medium);
        });
         })
     }, [])
     {person && console.log(person)}
     return (
      
        <div className="d-flex flex-column 
        bd-highlight mb-3 mt-10">
            <div className="d-flex justify-content-center">
              <h1>User Profile</h1>
            </div>
            <div className="d-flex justify-content-center ">
              {person&&<img  className="rounded-circle"src={person}></img>}
            </div>
        <div className="p-2 bd-highlight"><h2>Name:  {name}</h2></div>
        <div className="p-2 bd-highlight"><h2>Email:  {email}</h2></div>
        <div className="p-2 bd-highlight"><h2>Company:  {company}</h2></div>
        <div className="p-2 bd-highlight"><h2>Phone:  {phone}</h2></div>
      </div>
    )
}
