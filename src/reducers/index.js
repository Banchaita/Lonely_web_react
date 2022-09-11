import { combineReducers } from 'redux';
import auth from './auth'
import users from './users'
import loader from './loader';

const appReducer = combineReducers({
    auth,
    users,
    loader,

});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}
export default rootReducer;