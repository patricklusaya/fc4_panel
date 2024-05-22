import {
    IMAGE_SET
} from "../actions/Types";


const INITIAL_STATE = {

    setImage:{}


  

};

const ItemsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case IMAGE_SET:
            return {...state, setImage: action.payload, };

        default:
            return state;
    }
};

export default ItemsReducer;