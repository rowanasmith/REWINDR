const listContentReducer = (state = ['State'], action) => {


    if (action.type === 'SHOW_LIST_CONTENTS'){
        return action.payload;
    }
    else return state;
  }

  export default listContentReducer;