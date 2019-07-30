import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

interface PostListProps {
    fetchPosts: () => void;
}

class PostList extends React.Component<PostListProps, any> {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>PostList!</div>
        );
    }
}

export default connect(null, { fetchPosts })(PostList);