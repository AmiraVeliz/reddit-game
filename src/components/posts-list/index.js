import React from "react";

const PostsList = ({ loading, posts }) => {
    return (
      <div>
        <h1>Top posts</h1>
        {posts.map((post, index) => (
          <div key={index}>
            <hr />
            <h3>title: {post.title}</h3>
            <h3>author: {post.author}</h3>
            <h3>entryDate: {post.entryDate}</h3>
            <h3>comments: {post.numberComments}</h3>
            <h3>visited: {post.visited}</h3>
            <img
                alt={post.author}
                src={post.thumbnail}
                width='100'
                height='100'
            />
          </div>
        ))}
        <hr />
        {loading && <div>Loading...</div> }
        {posts === 0 && <div>There are no more posts...</div> }
      </div>
    );
}

export default PostsList;
