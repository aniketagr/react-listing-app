import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import PostListingHeader from './PostListingHeader';

beforeEach(() => {
    render(<PostListingHeader />);
});

describe('Post listing header component', () => {
    test('Renders listing post header', () => {
        const linkElement = screen.getByText(/Listing Post/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('Post listing header snapshot', () => {
        const tree = renderer.create(<PostListingHeader />);
        expect(tree.root.findByType("h1").children[0]).toEqual("Listing Posts");
        expect(tree.toJSON()).toMatchSnapshot();
    });
});





















// describe('Post listing header component', () => {
//     it('Renders listing post header', () => {
//         const linkElement = screen.getByText(/Listing Post/i);
//         expect(linkElement).toBeInTheDocument();
//     });

//     it('Post listing header snapshot', () => {
//         const tree = renderer.create(<PostListingHeader />);
//         expect(tree.root.findByType("h1").children[0]).toEqual("Listing Posts");
//         expect(tree.toJSON()).toMatchSnapshot();
//     });
// });
