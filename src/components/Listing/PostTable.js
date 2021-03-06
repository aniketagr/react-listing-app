import React, { useState } from 'react'
import PostEditing from './PostEditing';
import {Table, Button} from 'react-bootstrap';

function PostTable({ errorData, postsData, setterPost }) {
    const [editingCompFlag, setEditingCompFlag] = useState(false);
    const [recordId, setRecordId] = useState('');

    const editPost = id => {
        setEditingCompFlag(true);
        setRecordId(id);
    }

    const deletePost = id => {
        const filterPostData = postsData.filter(post => post.id !== id);
        setterPost(filterPostData);
    }

    return (
        editingCompFlag ? <PostEditing recordId={recordId} setEditingCompFlag={setEditingCompFlag} /> :
            errorData ? errorData :
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            postsData && !postsData.length &&
                            <tr>
                                <td colSpan="6">
                                    <div data-testid="loading">No Posts To Display</div>
                                </td>
                            </tr>
                        }
                        {
                            postsData && postsData.map(items => {
                                return (
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.userId}</td>
                                        <td>{items.title}</td>
                                        <td>{items.body}</td>
                                        <td>
                                            <Button
                                                onClick={() => editPost(items.id)}>
                                                Edit
                                            </Button>
                                        </td>
                                        <td>
                                            <Button
                                                onClick={() => deletePost(items.id)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
    )
}

export default PostTable
