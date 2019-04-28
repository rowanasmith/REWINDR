const addToListReducer = (state = ['State'], action) => {


    if (action.type === 'ADD_TO_COLLECTION'){
        return action.payload;
    }
    else return state;
  }

  export default addToListReducer;