import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';

const reducers = {
  postsStore: PostsReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
