import Immutable from 'seamless-immutable';

const initalState = Immutable({
  post: {},
  posts: [],
  loading: false
});

export default (state = initalState, action = {}) => {
  switch (action.type) {
    case 'FETCH_POSTS_START': {
      return state.merge({
        loading: true
      });
    }

    case 'FETCH_POSTS_FULFILLED': {
      const nextPosts = action.payload;
      return state.merge({
        loading: false,
        posts: [
          ...state.posts,
          ...nextPosts,
        ]
      });
    }

    case 'FETCH_POSTS_REJECTED': {
      return state.merge({
        loading: false,
      });
    }

    default:
      return state;
  }
}
