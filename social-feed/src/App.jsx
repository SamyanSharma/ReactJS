import React from 'react'
import PostCard from './PostCard';

const POSTS_DATA = [
  {
    id: 1,
    username: "dev_traveler",
    content: "Just finished my first React project!",
    likes: 24,
    comments: ["Great job!", "Keep it up!", "React is awesome."]
  },
  {
    id: 2,
    username: "chef_logic",
    content: "The secret to a perfect steak is the sear.",
    likes: 85,
    comments: ["Recipe please?", "Cast iron or grill?"]
  }
];

export default function App(){
  return(
    <>
    {POSTS_DATA.map(post => (
      <PostCard key={post.id} post={post}/>
    ))}
    </>
  );
};