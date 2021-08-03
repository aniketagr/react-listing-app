import axios from 'axios';
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import PostListingHeader from './PostListingHeader';
import PostTable from './PostTable';

function PostListing() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8081/listPosts')
            .then(response => {
                setPosts(response.data);
                setError('');
            })
            .catch(error => {
                setPosts([]);
                setError('Something went wrong!');
            })
    }, []);

    return (
        <React.Fragment>
            <div style={{ marginTop: '50px' }}>
                <PostListingHeader />
                <PostTable
                    errorData={error}
                    postsData={posts}
                    setterPost={setPosts}  //Passing setter function to update post data
                />
            </div>
        </React.Fragment>
    )
}

export default PostListing
