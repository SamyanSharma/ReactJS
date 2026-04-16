import React from 'react';

const CommentItem = ({text}) => {
  return (
    <li style={{backgroundColor: '#f0f0f0', padding: '5px', margin: '5px 0'}}>{text}</li>
  )
}

export default CommentItem;