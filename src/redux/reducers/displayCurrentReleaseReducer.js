const currentReleaseReducer = (state = 'State', action) => {


    if (action.type === 'DISPLAY_CURRENT_RELEASE'){
        return action.payload;
    }
    else return state;
  }

  export default currentReleaseReducer;