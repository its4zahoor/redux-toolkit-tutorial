const logger = (store) => (next) => (action) => {
  console.log("prevState", store.getState());
  console.log("action", action);
  next(action);
  console.log("state", store.getState());
};

export default logger;
