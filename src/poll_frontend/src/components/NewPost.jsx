import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { poll_backend } from 'declarations/poll_backend';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await poll_backend.addPost(title, content);
    setTitle("");
    setContent("");
    navigate("/");
  }


  return (
    <div className="row">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <h1 className="text-center">New Post</h1>
        <form className="form-group">
            <label htmlFor='title'>Title</label>
            <input type="text" className="form-control" onChange={handleTitleChange} placeholder="Title" />
            <label htmlFor='body'>Body</label>
            <textarea className="form-control" rows="5" onChange={handleContentChange} placeholder="Body"></textarea>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-4">Submit</button>
        </form>
      </div>
      <div className="col-sm-3"></div>
    </div>
  )
}

export default NewPost