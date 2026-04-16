import React from 'react';
import CommentItem from './CommentItem';

const PostCard = ({post}) => {
    const {username, content, likes, comments} = post;
  return (
    <div style={{border: '1px solid #ccc', margin: '10px', padding:'10px'}}>
        <h4>@{username}</h4>
        <p>{content}</p>
        <p style={likes > 50? {color: 'red', fontWeight: 'bold'} : {}}>
            Likes: {likes}
        </p>
        <ul>
            {comments.map((comment, index) =>(
                <CommentItem key={index} text={comment} />
            ))}
        </ul>
    </div>
  );
};

export default PostCard;