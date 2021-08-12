import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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

test("Edit button clicks", async () => {
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
    expect(screen.getByTestId('title-input')).toHaveAttribute('type', 'text');
});


test("Delete button clicks", async () => {
    axiosMock.get.mockResolvedValueOnce({
        data: []
    });

    render(<PostTable errorData={''} postsData={postsData} setterPost={() => console.log('setterfunction')} />);
    const button = screen.getByRole('button', {
        name: /Delete/i
    });
    fireEvent.click(button);
});