import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE,NAME_CHANGE} from '../action/Actiontypes';


const initialState = {

            text: "",
            places: [],
            placeSelected: null,

}



export const reducer = (state = initialState, action) =>{

    
    switch(action.type){
        case NAME_CHANGE:
            return{
                ...state,
                placeName: action.placeName
            }
        case ADD_PLACE:
            return{
                ...state,
                places: state.places.concat({
                    key: Math.random.toString(),
                    name: action.placeName,
                    image: {
                        uri:
                        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/04/12/cool-woman-2018.jpg?w968"
                    }
                    
                })
            };
        case DELETE_PLACE:
            return{
                ...state,
                places: state.places.filter(place =>{
                    return place.key !== state.placeSelected.key;

                }),
                placeSelected: null,
            };
        case SELECT_PLACE:
            return{
                ...state,
                placeSelected: state.places.find(place =>{
                    return place.key === action.placekey;
                })
            };
        case DESELECT_PLACE:
            return{
                ...state,
                placeSelected: null
            };    
        default:
            return state;
    }

};