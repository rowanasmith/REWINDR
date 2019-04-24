const currentMovieReducer = (state=[], action) => {


    if (action.type === 'SET_CURRENT_MOVIE'){
        return action.payload;
    }
    return state;
  }

  export default currentMovieReducer;