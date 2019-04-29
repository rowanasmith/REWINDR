const listContentReducer = (state = ['State'], action) => {


    if (action.type === 'DISPLAY_LIST_CONTENTS'){
        return action.payload;
    }
    else return state;
  }

  export default listContentReducer;