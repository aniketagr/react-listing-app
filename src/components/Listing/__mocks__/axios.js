// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: jest.fn().mockResolvedValue(
        { data: [] }
    ),
    
    // TODO: Uncomment once mock of these methods is done

    // get: jest.fn((url) => {
    //     if (url === '/something') {
    //         return Promise.resolve({
    //             data: 'data'
    //         });
    //     }
    // }),
    // post: jest.fn((url) => {
    //     if (url === '/something') {
    //         return Promise.resolve({
    //             data: 'data'
    //         });
    //     }
    //     if (url === '/something2') {
    //         return Promise.resolve({
    //             data: 'data2'
    //         });
    //     }
    // }),
    // create: jest.fn(function () {
    //     return this;
    // })
};