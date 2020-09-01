import { combineReducers } from 'redux';
import ReducerPosts from './ReducerPosts'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: ReducerPosts
});

export default rootReducer;
