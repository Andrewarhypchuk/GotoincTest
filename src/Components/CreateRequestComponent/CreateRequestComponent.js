import React, {createRef, useEffect, useState} from 'react';
import classes from './create.module.scss'
import { NavLink } from "react-router-dom";
const RequestComponent = (props) =>{

    const [parsel,setParsel] =useState({
        departCity :'',
        arriveCity:'',
        type:'',
        date:'',
        description:''
    });
    let departCity = createRef();
    let arriveCity = createRef();
    let type = createRef();
    let date = createRef();
    let description = createRef();

    function  departCityChanged(){
        setParsel({
            ...parsel, departCity: departCity.current.value
        })

    }
    function  arriveCityChanged(){
        setParsel({
            ...parsel, arriveCity: arriveCity.current.value
        })

    }
    function typeChanged(){
        setParsel({
            ...parsel, type: type.current.value
        })
    }
    function dateChanged(){
        setParsel({
            ...parsel, date: date.current.value
        })
    }
    function descriptionChanged(){
        setParsel({
            ...parsel, description: description.current.value
        })
    }
    function createParcel(){
        if(
            parsel.arriveCity.trim() !== '' &&
            parsel.departCity.trim() !== '' &&
            parsel.date.trim() !== '' &&
            parsel.date.trim() !== ''  &&
            parsel.description.trim() !== ''
        ){
            props.addParcel(parsel)
            alert('created')
            arriveCity.current.value = ''
            departCity.current.value = ''
            type.current.value = ''
            date.current.value = ''
            description.current.value = ''

        }else{

      alert('one of the fields is empty')
        }
    }
    return(
        <div>
            <div>Create a Parcel!</div>
            <form>
                <input onChange={departCityChanged} ref={departCity}  placeholder='   depart city...' type="text"/>
                <input onChange={arriveCityChanged} ref={arriveCity} placeholder='   arrive city' type="text"/>
                <input onChange={typeChanged} list='types' ref={type}  placeholder='   type...' type="text"/>
                <datalist id='types'>
                    <option value='gadgets'></option>
                    <option value='drinks'></option>
                    <option value='clothes'></option>
                    <option value='medicines'></option>
                    <option value='other'></option>
                </datalist>
                <input onChange={dateChanged}ref={date} placeholder='   date...' type="date"/>
                <input onChange={descriptionChanged} ref={description} placeholder='  description...' type="text"/>
                <input onClick={createParcel} type='button' value='create'/>
            </form>
        </div>
    )
}
export  default  RequestComponent;