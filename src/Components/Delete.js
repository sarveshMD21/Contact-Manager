import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'
export default function Delete() {
    const {id}=useParams();
    const history=useHistory();
    //console.log()
    const handleClick=()=>{
        fetch("http://localhost:3000/contact/"+id,{
            method:"DELETE"
        })
        .then(()=>{
            history.push("/");
        })
    }

    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center">
            <h1>Are you sure?</h1>
            </div>
            <div className="d-flex flex-row justify-content-center">
            <Link className="btn btn-success m-3" to='/'>Go Back</Link>
            <button className="btn btn-danger m-3" onClick={handleClick}>Delete Contact</button>
            </div>
        </div>
    )
}
