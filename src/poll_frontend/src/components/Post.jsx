import { useState, useEffect } from 'react';
import {poll_backend} from 'declarations/poll_backend';

const Post = ({post}) => {
  const [name, setName] = useState("");

  const fetchName = async () => {
    const response = await poll_backend.getName();
    setName(response);
  };
  useEffect(() => {
    fetchName();
  }, []);

  return (
    <div className="mt-4 card">
        <h3 className="display-3 card-title">{post.title}</h3>
        <p className="text-muted lead card-body">{post.content}</p>
    </div>
  )
}

export default Post