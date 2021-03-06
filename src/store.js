import { createStore } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import { reducer as reduxFormReducer } from 'redux-form/immutable';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
