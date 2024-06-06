import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addComment, getComments } from '../providers/comment/commentSlice';

const CommentBox = () => {

   const {comments, isLoading, isSuccess, isError, message} = useSelector((state)=>state.comment) 
   const {complaint} = useSelector((state)=>state.complaint)

  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const {id} = useParams()

   // Add Comment
   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addComment({id: id, comment : text}))
  };


//   Get Comment
useEffect(()=>{
    dispatch(getComments(id));
},[]);


if(isLoading){
  return (
    <h1 className='text-center display-6 text-secondary my-5'>Loading...</h1>
  )
}


  return (
    <div className="card p-3 rounded-0 mt-2">

        <form className="p-2" onSubmit={handleSubmit}>
            <input type="text" className='form-control' placeholder='Give your comment' value={text} onChange={(e)=>setText(e.target.value)} disabled={complaint.status === 'close' ? true : false} />
            <button type='submit' className="btn btn-dark rounded-0 my-3 btn-sm float-end" disabled={complaint.status === 'close' ? true : false}>Add Comments</button>
        </form>

        <div className="card p-3">
          <h6 className='text-center'>MY COMMENTS</h6>
          <ul className='list-group my-2'>
            {
            comments.map((comment) => {
              return (
            <li className="list-group-item rounded-0 d-flex justify-content-between align-items-center" key={comment._id}>{comment.comment}<p className='text-small text-secondary'>{new Date(comment.createdAt).toDateString('en-IN')}</p></li>
          )
        })
              
            }          
</ul>
        </div>
    </div>
  )
}

export default CommentBox