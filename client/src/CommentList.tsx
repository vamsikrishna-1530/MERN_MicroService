import axios from 'axios';
import React, {useState, useEffect} from 'react'

type Props = {
    postId: string
}

const CommentList = ({ postId }: Props) => {
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(res.data);
    }
    useEffect(() => {
     fetchComments()   
    },[])
  return (
      <div>
          {
              comments.map((comments: any) => {
                  return (
                      <ul>
                          <li key={comments.id}>{ comments.content}</li>
                      </ul>
                  )
              })
          }
    </div>
  )
}

export default CommentList