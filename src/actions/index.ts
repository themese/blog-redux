import jsonPlaceholder from '../api/jsonplaceholder';

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');
    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};