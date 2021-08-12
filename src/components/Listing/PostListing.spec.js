import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import PostListing from './PostListing';

afterEach(cleanup);

test("List of posts", async () => {
    axiosMock.get.mockResolvedValueOnce({
        data: [{
            "userId": 1,
            "id": 1,
            "title": "Test",
            "body": "Testing"
        }]
    })
    const { getByTestId } = render(<PostListing />);
    const resolvedDiv = await waitFor(() => getByTestId('list'));
    expect(resolvedDiv).toHaveTextContent('Testing');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
});

test("List with no posts", async () => {
    axiosMock.get.mockResolvedValueOnce({
        data: []
    })
    const { getByTestId } = render(<PostListing />);
    const resolvedDiv = await waitFor(() => getByTestId('loading'));
    expect(resolvedDiv).toHaveTextContent('No Posts To Display');
});

test("Returns error", async () => {
    axiosMock.get.mockRejectedValue(new Error('Network Error'));
    const { getByTestId } = render(<PostListing />);
    await waitFor(() => getByTestId('list'));
    expect(axiosMock.get).toHaveBeenCalled();
    await expect(axiosMock.get).rejects.toStrictEqual(Error('Network Error'));
});