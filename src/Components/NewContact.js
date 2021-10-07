import React from 'react'
import {useState} from 'react';
import { Link, useHistory } from "react-router-dom";


export default function NewContact() {
    const [name,setName]=useState("User");
    const [email,setEmail]=useState("User@mail.com");
    const [phone,setPhone]=useState("0000000000");
    const [company,setCompany]=useState("XYZfirm");
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const obj={name,email,phone,company};
        fetch("http://localhost:3000/contact",{
           method: "POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(obj)
        }).then(()=>{
            history.push("/");
        });
    }

    return (
        <div className="d-flex flex-column p-5">
            <div className="d-flex justify-content-center mb-2">
                <h1>Enter Details</h1>
            </div>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name" value={name} 
                   onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="Email" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="Phone" 
                     value={phone} 
                     onChange={(e)=>setPhone(e.target.value)} />
                </div>
                <div className="col-12">
                    <label htmlFor="Company" className="form-label">Company</label>
                    <input type="text" className="form-control" id="Company" 
                      value={company} 
                      onChange={(e)=>setCompany(e.target.value)}/>
                </div>

                <div className="col-12 ">
                    <button type="submit" className="btn btn-primary">Add to Contacts</button>
                </div>
                <div className="col-12 ">
                    <Link  className="btn btn-danger" to="/">Go back</Link>
                </div>
            </form>
        </div>
    )
}
