import React from "react";
import './posts-list.css';
import { Icon, Card, Image } from 'semantic-ui-react';
import DateConverter from '../common/date-converter';

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

    render() {
        const { loading, posts } = this.props;

        return (
            <div className="ligth-text">
                <h1>Reddit Posts</h1>
                {posts.map((post, index) => (
                    <Card key={post.name} className='card-post'>
                        <Card.Content>
                            <div className='spaced-items'>
                                <span class="dot"></span>
                                <span>{post.author}</span>
                                <span>{DateConverter.getDateAgo(post.entryDate)}</span>
                            </div>
                            <div className='card-body'>
                                <Image
                                floated='left'
                                size='tiny'
                                src={post.thumbnail}
                                />
                                <Card.Meta className='ligth-text text-left'>{post.title}</Card.Meta>
                            </div>
                            <div className='spaced-items'>
                                <div>
                                    <Icon inverted name='close' className='secondary-color'/> Dismiss post
                                </div>
                                <span className='secondary-color'>{post.numberComments} comments</span>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
                <hr />
                {loading && <div>Loading...</div> }
                {posts === 0 && <div>There are no more posts...</div> }
            </div>
        );
    }
}
