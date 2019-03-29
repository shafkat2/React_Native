import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE,NAME_CHANGE} from './Actiontypes';


export const addPlace = (placeName)=>{

    return {
        type: ADD_PLACE,
        placeName : placeName
    };
}

export const nameChanger = (Name)=>{

    return {
        type: NAME_CHANGE,
        Name : Name
    };
}


export const deletePlace = ()=>{

    return {
        type: DELETE_PLACE,
        
    };
}

export const selectPlace = (key)=>{

    return {
        type: SELECT_PLACE,
        placekey : key
    };
}

export const deselectPlace = (placeName)=>{

    return {
        type: DESELECT_PLACE,
    };
}