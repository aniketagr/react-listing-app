import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostEditing({ recordId }) {
    const [editPost, setEditPost] = useState([]);
    const [editError, setEditError] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8081/editPost/${recordId}`)
            .then(response => {
                setEditPost(response.data);
                console.log(editPost);
                setEditError('');
            })
            .catch(error => {
                setEditPost([]);
                setEditError('Something went wrong!');
                console.log(error);
                console.log(editError);
            })
    });

    console.log('hereerrer');

    return (
        // <React.Fragment>
        <div>
            {console.log(recordId)}

            <form onSubmit={this.submitHandler}>
                <div>
                    <input
                        type='text'
                        name='userId'
                        // value={userId}
                        onChange={this.changeHandler}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        name='title'
                        // value={title}
                        onChange={this.changeHandler} />
                </div>
                <div>
                    <input
                        type='text'
                        name='body'
                        // value={body}
                        onChange={this.changeHandler} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {/* </React.Fragment> */}
        </div>
    )
}

export default PostEditing
