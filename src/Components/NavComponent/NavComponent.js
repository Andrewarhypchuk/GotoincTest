import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import classes from './nav.module.scss'
const Nav = () =>{
return(
    <div className={classes.container}>
        <div className={classes.header}>Navigation</div>
        <NavLink className={classes.link} to="/createRequest">
            Create Request
        </NavLink>
        <NavLink className={classes.link} to="/requestList">
            List
        </NavLink>
        </div>
)
}
export  default Nav;