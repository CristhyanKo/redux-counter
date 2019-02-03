const initialState = {
  value: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, value: state.value + action.val }
    case 'DEC':
      return { ...state, value: state.value - action.val }
    default:
      return state;
  }
};