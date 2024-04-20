import React, { useState, useEffect } from 'react'
import Post from './Post'
import { poll_backend } from 'declarations/poll_backend';

const Feeds = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await poll_backend.getPosts();
    console.log(response);
    setPosts([... response]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='col-sm-6'>
        <h1 className='text-center'>Feeds</h1>
        {posts.map((post) => <Post post={post} />)}
    </div>
  )
}

export default Feeds