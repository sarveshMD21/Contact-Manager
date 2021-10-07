import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

export default function Contact({name,phone,id}) {
    return (
        <div className="d-flex flex-row  bd-highlight border border-info m-4 p-2 justify-content-between ">
            <h2>{name}</h2>
            <h2>{phone}</h2>
            <div>
                <Link className="btn btn-success m-1" to={`/${id}/view`}>view</Link>
                <Link className="btn btn-primary m-1" to={`/${id}/update`}>update</Link>
                <Link  className="btn btn-danger m-1" to={`/${id}/delete`}>delete</Link>
            </div>
        </div>
    )
}
