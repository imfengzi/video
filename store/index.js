import user from './user';
import {createStore} from 'redux';

const models = {
  user,
};

export default store = createStore(function (state, action) {
  if (typeof state !== 'undefined') {
    const {namespace, type, data} = action;
    const newState = models[namespace].reducers[type](state[namespace], data);
    return {...state, [namespace]: newState};
  } else {
    const reducers = {};
    Object.keys(models).forEach((item) => {
      const model = models[item];
      const namespace = model.namespace ?? item;
      reducers[namespace] = model.state;
      const reducersKeys = Object.keys(model.reducers);
      const actions = {};
      if (reducersKeys.length > 0) {
        reducersKeys.forEach((i) => {
          actions[i] = (data) => {
            store.dispatch({
              namespace: item,
              type: i,
              data,
            });
          };
        });
      }
      model.actions = actions;
    });
    return reducers;
  }
});

export {user};
