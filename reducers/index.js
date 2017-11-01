const defaultState = {
  reddits: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_REDDITS_REQUEST':
    // console.warn(action);
    return state;

    case 'GET_REDDITS_SUCCESS':
    return {
      ...state,
      reddits: action.data.data.children,
      }
    break;

    default:
    return state;
  }
}
