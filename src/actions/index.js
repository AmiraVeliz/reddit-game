import request from "superagent";

const URL = 'https://www.reddit.com/top.json';
const LIMIT = 10;

export const getPosts = (dispatch, lastPost = '') => {
  dispatch({
    type: 'FETCH_POSTS_START'
  });
  request
    .get(`${URL}?limit=${LIMIT}&after=${lastPost}`)
    .then((results) => {
        const children = results.body.data.children;
        const nextPosts = children.map(post => ({
            title: post.data.title,
            author: post.data.author,
            entryDate: post.data.created,
            thumbnail: post.data.thumbnail,
            numberComments: post.data.num_comments,
            visited: post.data.visited,
            url: post.data.url,
            name: post.data.name
        }));
        dispatch({
            type: 'FETCH_POSTS_FULFILLED',
            payload: nextPosts
        });
    })
    .catch(err => {
        console.log(err);
        dispatch({
            type: 'FETCH_POSTS_REJECTED',
        });
    })
}

