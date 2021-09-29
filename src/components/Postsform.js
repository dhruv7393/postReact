import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { newPost } from '../redux/actions/postActions';

const PostsForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        const post = {title: title, body: body}
        dispatch(newPost(post))
    }
    return ( 
        <div>
            <h1>Add post</h1>
            <form onSubmit={e => handleFormSubmit(e)}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Body:</label>
                    <input type="text" value={body} onChange={e=>setBody(e.target.value)} />
                </div>
                <input type="submit" />
            </form>
        </div>
     );
}
 
export default PostsForm;