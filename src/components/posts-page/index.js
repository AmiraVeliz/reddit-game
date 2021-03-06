import { connect } from 'react-redux';
import React from 'react';
import { getPosts } from '../../actions';
import PostsList from '../posts-list';
import PostDetail from '../post-detail';
import './posts-page.css';

class PostsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postInDetail: {}
    }
  }

  componentWillMount = () => {
    this.props.getPosts();
  }

  handleMorePosts = () => {
      const { posts, getPosts } = this.props;
      getPosts(posts[posts.length - 1].name);
  }

  handleViewUrl = (post) => {
      this.setState({
        postInDetail: post
      });
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
                    handleViewUrl={this.handleViewUrl}
                />
            </div>

            <div className="posts-detail">
                <PostDetail
                  postInDetail={this.state.postInDetail}
                />
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
