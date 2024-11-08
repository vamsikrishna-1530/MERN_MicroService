import axios from 'axios';
import React, {useState} from 'react'

type Props = {
    postId: string
}

const CommentCreate = ({ postId }: Props) => {
    const [content, setContent] = useState('');
    const onSubmit = async (e: any) => {
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
        setContent('');
    }
  return (
      <div>
          <form onSubmit={onSubmit}>
              <div className='form-group mb-3'>
                  <label> New Comment</label>
                  <input
                      value={content}
                      type="text"
                      onChange={(e: any) => {
                          setContent(e.target.value)
                      }}
                      className="form-control" />
              </div>
              <button className="btn btn-primary">Submit</button>
          </form>
    </div>
  )
}

export default CommentCreate