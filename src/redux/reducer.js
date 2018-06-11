import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';
import notifs from './modules/notifs';

export default function createReducers(asyncReducers) {
  return {
    router: routerReducer,
    online: (v = true) => v,
    form,
    notifs,
    auth,
    ...asyncReducers
  };
}
