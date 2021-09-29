import React,{ useEffect} from 'react';
import { fetchPosts } from '../redux/actions/postActions';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types'

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.items);
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    

    return ( 
        <div>
            <h1>Posts</h1>
            {posts && posts.length && posts.map(post =>{
                return (<div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>)
            })}
        </div>
     );
}

Posts.protoTypes={
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

export default Posts;