import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
// import { toast } from 'react-toastify';

function PostEditing({ recordId, setEditingCompFlag }) {
    const [editPost, setEditPost] = useState({ userId: '', body: '', title: '' });
    const [editError, setEditError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8081/editPost/${recordId}`)
            .then(response => {
                setEditPost({
                    userId: response.data.userId,
                    body: response.data.body,
                    title: response.data.title
                });
                setEditError('');
            })
            .catch(error => {
                setEditPost({ userId: '', body: '', title: '' });
                setEditError('Something went wrong!');
                console.log(editError);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitHandler = e => {
        axios.put(`http://localhost:8081/updatePost/${recordId}`, editPost)
            .then(res => {
                console.log(res);
                // toast.success('Post updated successfully', {
                //     position: toast.POSITION.TOP_RIGHT
                // });
                setEditingCompFlag(false);
            })
            .catch(err => {
                console.log(err);
                // toast.error('Error occured while updating', {
                //     position: toast.POSITION.TOP_RIGHT,
                // });
            });
        e.preventDefault(); // Stop page reloading
    }

    return (
        <form style={{ textAlign: 'center' }} data-testid="edit-form">
            <div className='mb-3'>
                <label className="form-label">User Id : </label>
                <input
                    className="form-control-l"
                    type='text'
                    name='userId'
                    placeholder='userId'
                    value={editPost.userId}
                    onChange={e => setEditPost({ ...editPost, userId: e.target.value })}
                />
            </div>
            <div className='mb-3'>
                <label className="form-label">Title : </label>
                <input
                    className="form-control-l"
                    type='text'
                    name='title'
                    data-testid="title-input"
                    placeholder='title'
                    value={editPost.title}
                    onChange={e => setEditPost({ ...editPost, title: e.target.value })}
                />
            </div>
            <div className='mb-3'>
                <label className="form-label">Description : </label>
                <textarea
                    className="form-control-l"
                    rows='5'
                    cols='23'
                    name='body'
                    placeholder='body'
                    value={editPost.body}
                    onChange={e => setEditPost({ ...editPost, body: e.target.value })}>
                </textarea>
            </div>
            <Button className="mt-3" onClick={submitHandler}>Submit</Button>
        </form>
    )
}

export default PostEditing
