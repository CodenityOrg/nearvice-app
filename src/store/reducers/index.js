
import ExampleReducer from './example';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  example: ExampleReducer,
});

export default rootReducer;