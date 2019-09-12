import React from "react";
import PropTypes from 'prop-types';

const PostDetail = ({ postInDetail }) => {
    const { author, title, url } = postInDetail;
    return (
        <div>
            <h2>{author}</h2>
            <img alt='Post in detail' src={url} class="ui massive image" />
            <p>{title}</p>
        </div>
    );
}

PostDetail.propTypes = {
    postInDetail: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        entryDate: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        numberComments: PropTypes.number.isRequired,
        visited: PropTypes.bool.isRequired,
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

PostDetail.defaultProps = {
    postInDetail: {
        title: '',
        author: '',
        entryDate: 0,
        thumbnail: '',
        numberComments: 0,
        visited: false,
        url: 'https://react.semantic-ui.com/images/wireframe/image.png',
        name: ''

    }
}

export default PostDetail;
