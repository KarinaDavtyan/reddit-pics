const defaultState = {
  reddits: [],
  refreshing: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_REDDITS_REQUEST':
    return {
      ...state,
      refreshing: true,
      }

    case 'GET_REDDITS_SUCCESS':
    return {
      ...state,
      reddits: action.data.data.children,
      refreshing: false,
      }
    break;

    default:
    return state;
  }
}
