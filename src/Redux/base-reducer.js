
const ADD_NEW_PARCEL = "ADD-NEW-PARCEL";
const DELETE_PARCEL = "DELETE-PARCEL";

let initialState = {
    base:[{
        departCity :'Lviv1',
        arriveCity:'Odesa',
        type:'clothes',
        date:'02-05-2022',
        description:'bring it carefully!'
    },
    ]
}

const ParcelReducer = (state= initialState,action) => {
    switch (action.type) {
        case ADD_NEW_PARCEL:
            return {

                ...state,
                base: [...state.base, action.baseItem]
            }
        case DELETE_PARCEL:

            return{
                ...state,
                base: state.base.filter((item,i) => i !== action.number)
            }
        default:
            return state;
    }
}
export const setAddParcelAC = (baseItem) => ({ type: ADD_NEW_PARCEL, baseItem })
export const setDeleteParcelAC = (number) => ({ type: DELETE_PARCEL, number })
export default ParcelReducer;