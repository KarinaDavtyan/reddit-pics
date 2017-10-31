export default (store) => (next) => (action) => {
  console.log('=======================')
  console.log('State', store.getState());
  console.log('Action', action);
  next(action);
  console.log('New State', store.getState());
  console.log('=======================');
}
