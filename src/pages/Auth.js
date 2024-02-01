import React from 'react'
import {Navigate} from "react-router-dom"

function Auth(_props) {
    const {Component}=_props
    const renderComponent=Component(_props).props.myprop
    if(localStorage.getItem("Prov").toString()!=="false" && renderComponent.toString()===localStorage.getItem("Role")){
        return <div><Component/></div>
    }
  return (
    <>
    <Navigate to="/"/>
    </>
  )
}

export default Auth