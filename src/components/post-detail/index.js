import React from "react";
import PropTypes from 'prop-types';

const PostDetail = ({largePicture}) => <img alt='Post in detail' src={largePicture} class="ui massive image" />;

PostDetail.propTypes = {
    largePicture: PropTypes.string.isRequired
}

PostDetail.defaultProps = {
    largePicture: 'https://react.semantic-ui.com/images/wireframe/image.png'
}

export default PostDetail;
