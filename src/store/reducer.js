const initialState = {
  oui: 2,
  non: 5,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'VOTE':
      return {
        ...state,
        [action.name]: state[action.name] + 1,
      };
    default:
      return state;
  }
};

export default reducer;
