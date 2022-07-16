import { connect } from 'react-redux';
import ParcelListComponent from "./ParcelListComponent";
import {setDeleteParcelAC} from "../../Redux/base-reducer";

let mapStateToProps = (state) => {
    return{
        base :state.base
    }
}
export default connect(mapStateToProps,{
  deleteParcel: setDeleteParcelAC
})(ParcelListComponent);