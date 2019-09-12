import React from "react";
import PropTypes from 'prop-types';

import PostItem from '../post-item'

import './posts-list.css';

export default class PostsList extends React.Component {

    constructor(props) {
      super(props);
      this.state = {}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const { loading, posts, handleMorePosts } = this.props;
        if (loading || posts.length === 0) return;

        // if page has scrolled to the bottom
        if (
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
        ) {
            handleMorePosts();
        }
    }

    onClickPost = (post) => {
        this.props.handleViewUrl(post);
    }

    render() {
        const { loading, posts } = this.props;

        return (
            <div className="ligth-text">
                <h1>Reddit Posts</h1>
                {posts.map((post, index) => (
                    <PostItem
                        key={index}
                        post={post}
                        handleViewUrl={this.onClickPost}
                    />
                ))}
                <hr />
                {loading && <div>Loading...</div> }
                {posts === 0 && <div>There are no more posts...</div> }
            </div>
        );
    }
}

PostsList.propTypes = {
    loading: PropTypes.bool.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        entryDate: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        numberComments: PropTypes.number.isRequired,
        visited: PropTypes.bool.isRequired,
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })),
    handleMorePosts: PropTypes.func.isRequired,
    handleViewUrl: PropTypes.func.isRequired
}

PostsList.defaultProps = {
    loading: false,
    posts: [],
    handleMorePosts: () => {},
    handleViewUrl: () => {}
}
