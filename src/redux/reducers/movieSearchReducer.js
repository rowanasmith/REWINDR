const movieSearchReducer = (state=[{Search: ''}], action) => {


    if (action.type === 'SET_MOVIE_SEARCH_RESULTS'){
        return action.payload;
    }
    return state;
  }

  export default movieSearchReducer;