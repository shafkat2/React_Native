import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE} from './Actiontypes';


export const addPlace = (placeName)=>{

    return {
        type: ADD_PLACE,
        placeName : placeName
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

<<<<<<< HEAD
export const deselectPlace = (placeName)=>{
=======
export const deselcetPlace = (placeName)=>{
>>>>>>> 724b4ceb1907e83df6585f0a772263f0b0c8aa41

    return {
        type: DESELECT_PLACE,
    };
}