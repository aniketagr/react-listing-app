import React from 'react';
import { render, waitFor, screen, fireEvent, getByPlaceholderText, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import axiosMock from 'axios';
import PostTable from './PostTable';


const postsData = [{
    id: '1',
    userId: '1',
    title: 'Testing',
    body: 'Body'
}];

test("List with no posts posttable", async () => {
    const { container } = render(<PostTable errorData={''} postsData={[]} setterPost={() => console.log('setterfunction')} />);
    expect(container.firstChild.classList.contains('table-bordered')).toBe(true);
});


test("List with no posts posttable button click", async () => {
    // const editPost = jest.fn();
    axiosMock.get.mockResolvedValueOnce({
        data: [{
            "userId": 1,
            "id": 1,
            "title": "Test",
            "body": "Testing"
        }]
    });

    const { getByTestId } = render(<PostTable errorData={''} postsData={postsData} setterPost={() => console.log('setterfunction')} />);
    const button = screen.getByRole('button', {
        name: /Edit/i
    });
    fireEvent.click(button);
    const resolvedDiv = await waitFor(() => getByTestId('edit-form'));
    expect(resolvedDiv).toBeInTheDocument('title');
    // expect(resolvedDiv).toHaveTextContent('Title :');
    // expect(getByPlaceholderText('title')).toBeInTheDocument();
    // expect(editPost).toHaveBeenCalled();
    // expect(container.getByPlaceholderText('title')).toBe(true);
    // expect(getByLabelText('Title')).toBeInTheDocument();
});