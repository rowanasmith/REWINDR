const releasesReducer = (state = ['State'], action) => {
    switch (action.type) {
      case "SET_RELEASES":
        return action.payload;
      default:
        return state;
    }
  };

  export default releasesReducer