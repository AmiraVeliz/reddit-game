import { connect } from 'react-redux';
import React from 'react';
import { getPosts } from '../../actions';
import PostsList from '../posts-list';
import './posts-page.css';

class PostsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount = () => {
    this.props.getPosts();
  }

  handleMorePosts = () => {
      const { posts, getPosts } = this.props;
      getPosts(posts[posts.length - 1].name);
  }

  render() {
    const { posts, loading } = this.props;

    return (
        <div className="container">
            <div className="posts-list">
                <PostsList
                    loading={loading}
                    posts={posts}
                    handleMorePosts={this.handleMorePosts}
                />
            </div>

            <div className="posts-detail">
                Right col
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postsStore.posts,
  loading: state.postsStore.loading
})

const mapDispatchToProps = dispatch => ({
    getPosts: (lastPost) => getPosts(dispatch, lastPost),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
