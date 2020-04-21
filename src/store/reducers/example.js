  
import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  status: false,
};

const Example = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          status: true
        }
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          status: false
        }
      default:
        return state
    }
}

export default Example;