import { connect } from 'react-redux';
import React from 'react';
import { getPosts } from '../../actions';
import PostsList from '../posts-list';

class PostsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.attachScroll();
  }

  componentWillMount = () => {
    this.props.getPosts();
  }

  attachScroll () {
    window.onscroll = () => {
        const { loading, posts } = this.props;
        if (loading || posts.length === 0) return;

        // if page has scrolled to the bottom
        if (
          window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight
        ) {
          this.loadPosts();
        }
      };
  }

  loadPosts() {
      const { posts, getPosts } = this.props;
      getPosts(posts[posts.length - 1].name);
  }

  render() {
    const { posts, loading } = this.props

    return (
      <div>
        <PostsList
            loading={loading}
            posts={posts}
        />
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
