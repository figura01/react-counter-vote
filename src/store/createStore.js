const createStore = (paramReducer) => {
  let state = paramReducer();
  // Je stocke le callback
  const callbackMemo = [];

  // Lecture
  const getState = () => ({ ...state });

  // Modification
  const dispatch = (action) => {
    state = paramReducer(state, action);
    // Je déclenche le callback
    callbackMemo.forEach((callback) => {
      callback();
    });
  };

  // Abonnement - callback, une fonction qui SERA exécutée
  const subscribe = (callback) => {
    callbackMemo.push(callback);
  };

  // Le store généré
  return {
    // Lecture
    getState,
    // Modification
    dispatch,
    // Abonnement
    subscribe,
  };
};

export default createStore;
