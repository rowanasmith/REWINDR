const setListsReducer = (state = ['State'], action) => {


    if (action.type === 'SET_LISTS'){
        return action.payload;
    }
    else return state;
  }

  export default setListsReducer;