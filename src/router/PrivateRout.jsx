import React from 'react'
import {connect}from 'react-redux';
import { Route,Redirect } from 'react-router';
const PrivateRout=({
    isAuthenticated,
    component:Component,
    ...rest
})=> {
    return (
        <Route {...rest} component={(props)=>{
            isAuthenticated ? (
                <Component {...props} />
            ):(
                <Redirect to="/login" />
            )
        }} />
    )
}
const mapStateToProps = (state)=>({
    isAuthenticated: !!state.auth.uid
})
export default connect(mapStateToProps)(PrivateRout);
