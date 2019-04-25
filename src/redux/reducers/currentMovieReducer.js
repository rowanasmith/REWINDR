const currentMovieReducer = (state = ['State'], action) => {


    if (action.type === 'SET_CURRENT_MOVIE'){
        return action.payload;
    }
    else return state;
  }

  export default currentMovieReducer;