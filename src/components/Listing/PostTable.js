import React from 'react'
import PostEditing from './PostEditing';

function PostTable({ errorData, postsData, setterPost }) {

    function editPost(id) {
        console.log(`id is ${id}`);
        <PostEditing recordId={id} />
    }

    function deletePost(id) {
        const filterPostData = postsData.filter(post => post.id !== id);
        setterPost(filterPostData);
    }

    return (
        errorData ? errorData :
            <table>
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
                        postsData && postsData.map(items => {
                            return (
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.userId}</td>
                                    <td>{items.title}</td>
                                    <td>{items.body}</td>
                                    <td>
                                        <button
                                            // onClick={() => <PostEditing recordId={items.id} />}>
                                            onClick={() => editPost(items.id)}>
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => deletePost(items.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {postsData && !postsData.length &&
                        <tr>
                            <td colSpan="6">
                                <div>No Users To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
    )
}

export default PostTable
