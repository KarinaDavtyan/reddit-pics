export default (store) => (next) => (action) => {
  if (!action.url) return next(action);

  next({
    ...action,
    type: action.type + '_REQUEST'
  });
  fetch(action.url)
  .then(response => response.json())
  .then(data => {
    next({
      ...action,
      type: action.type + '_SUCCESS',
      data,
    });
  })
  .catch(error => {
    next({
      ...action,
      type: action.type + '_FAILURE',
      error
    });
  })
}
