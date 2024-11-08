import axios from 'axios';
import React, { useState } from 'react';

type Props = {}

const PostCreate = (props: Props) => {
    const [title, setTitle] = useState<string>("")
    const onSubmit = async (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:4000/posts', { title });
        setTitle("");
    };
  return (
          <form onSubmit={onSubmit}>
              <div className="form-group mb-3">
                  <label>Title</label>
                  <input
                      value={title}
                      type="text"
                      onChange={(e) => {
                          setTitle(e.target.value)
                      }}
                      className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
  )
}

export default PostCreate