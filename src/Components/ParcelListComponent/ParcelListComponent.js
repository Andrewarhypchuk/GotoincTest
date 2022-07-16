import React  from 'react';
import classes from './parcelList.module'


const ParcelListComponent = (props) => {
    function deleteItem(number){
        props.deleteParcel(number)
    }

    let allParcels = props.base.base.map((parcel,index)=>{
        return(
            <div className={classes.itemContainer} key={index}>
                <div className={classes.itemHeader}>Parcel</div>
                <div>Department city : <span>{parcel.departCity}</span></div>
                <div>Arrive city : <span>{parcel.arriveCity}</span></div>
                <div>Type of parcel : <span>{parcel.type}</span></div>
                    <div>Date of dispatch : <span>{parcel.date}</span></div>
                <div>Description :<span> {parcel.description}</span></div>
                <button onClick={()=>{deleteItem(index)}} className={classes.button}>Delete</button>
            </div>
        )
    })
return(
    <div className={classes.container} >
        <h3 className={classes.header}> List</h3>
        <div className={classes.listContainer}>
            {allParcels}
        </div>


    </div>
)
}
export default ParcelListComponent;