import {FETCH_POSTS, NEW_POST} from './types'
import axios from 'axios'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
};

export const newPost = (post) => dispatch =>{
  axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then(function ({data}) {
          dispatch({
            type: NEW_POST,
            payload: data
          })
        })
        .catch(function (error) {console.log(error);});
}