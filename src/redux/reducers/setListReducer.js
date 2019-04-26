const setListReducer = (state = ['State'], action) => {


    if (action.type === 'SET_LIST'){
        return action.payload;
    }
    else return state;
  }

  export default setListReducer;