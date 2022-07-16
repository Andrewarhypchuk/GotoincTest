import React from "react";
import classes from './styles.scss';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Nav from "./Components/NavComponent/NavComponent";
import {Navigate, Routes} from "react-router";
import ParcelListContainer from "./Components/ParcelListComponent/ParcelListContainer";
import CreateRequestContainer from "./Components/CreateRequestComponent/CreateRequestContainer";

const App = () =>{
return(
    <BrowserRouter >
        <div className={classes.container}>
            <Nav />
            <Routes>
                <Route path="/" element={ <CreateRequestContainer />}/>
                <Route path="/createRequest" element={ <CreateRequestContainer />}/>
                <Route path="/requestList" element={ <ParcelListContainer />} />
            </Routes>
        </div>
    </BrowserRouter>
)
}
export default  App;