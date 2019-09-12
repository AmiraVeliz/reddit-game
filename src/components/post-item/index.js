import { Icon, Card, Image } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';

import DateConverter from '../common/date-converter';

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClickPost = () => {
        this.props.handleViewUrl(this.props.post.url);
    }

    render() {
        const { name, author, thumbnail, title, entryDate, numberComments } = this.props.post;

        return (
            <Card key={name} className='card-post'>
                <Card.Content>
                    <div className='spaced-items'>
                        <span class="dot"></span>
                        <span>{author}</span>
                        <span>{DateConverter.getDateAgo(entryDate)}</span>
                    </div>
                    <div className='card-body'>
                        <Image
                            floated='left'
                            size='tiny'
                            src={thumbnail}
                            onClick={this.onClickPost}
                        />
                        <Card.Meta className='ligth-text text-left'>{title}</Card.Meta>
                    </div>
                    <div className='spaced-items'>
                        <div>
                            <Icon inverted name='close' className='secondary-color'/> Dismiss post
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
        url: PropTypes.string.isRequired
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
        url: ''

    },
    handleViewUrl: () => {}
}

export default PostItem;
