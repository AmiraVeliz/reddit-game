import { Icon, Card, Image } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

import DateConverter from '../common/date-converter';

import './post-item.css';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePost: false,
            hidingPost: false
        };
    }

    onClickThumbnail = () => {
        this.props.handleViewUrl(this.props.post.url);
    }

    onHidePost = () => {
        this.setState({
            hidePost: true
        });
    }

    render() {
        const { name, author, thumbnail, title, entryDate, numberComments, visited } = this.props.post;

        return (
            <Card
                key={name}
                className={this.state.hidePost? 'hide-post': 'card-post'}
                onClick={this.onViewPost}
            >
                <Card.Content>
                    <div className='spaced-items'>
                        <span class={visited? 'dot dot-gray': 'dot dot-blue'}></span>
                        <span>{author}</span>
                        <span>{DateConverter.getDateAgo(entryDate)}</span>
                    </div>
                    <div className='card-body'>
                        <Image
                            floated='left'
                            size='tiny'
                            src={thumbnail}
                            onClick={this.onClickThumbnail}
                        />
                        <Card.Meta className='ligth-text text-left'>{title}</Card.Meta>
                    </div>
                    <div className='spaced-items'>
                        <div>
                            <Icon
                                inverted
                                name='close'
                                className='secondary-color'
                                onClick={this.onHidePost}
                            /> Dismiss post
                        </div>
                        <span className='secondary-color'>{numberComments} comments</span>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}

PostItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        entryDate: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        numberComments: PropTypes.number.isRequired,
        visited: PropTypes.bool.isRequired,
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
    handleViewUrl: PropTypes.func.isRequired
}

PostItem.defaultProps = {
    posts: {
        title: '',
        author: '',
        entryDate: 0,
        thumbnail: '',
        numberComments: 0,
        visited: false,
        url: '',
        name: ''

    },
    handleViewUrl: () => {}
}

export default PostItem;
