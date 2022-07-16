import { connect } from 'react-redux';
import {setAddParcelAC} from "../../Redux/base-reducer";

import RequestComponent from "./CreateRequestComponent";

let mapStateToProps = (state) => {
    return{
        base :state.base

    }
}
export default connect(mapStateToProps,{
    addParcel :setAddParcelAC,
})(RequestComponent);