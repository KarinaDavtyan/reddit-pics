const defaultState = {
  reddits: [],
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_REDITS_REQUEST':
    console.warn(action);
    return state;

    case 'GET_REDITS_SUCCESS':
    console.warn(action);
    return state;
    break;

    default:
    return state;
  }
}
