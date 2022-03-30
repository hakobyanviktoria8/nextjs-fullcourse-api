import React from 'react'
import { useRouter } from 'next/router'

// imports all comments here
import { comments } from "../../data/comments";

function CommentId({comment}) {
    // const router = useRouter()
    // const id = router.query.commentId
    console.log(comment)

  return (
    <div>
        <h1>Comment</h1> 
        <h1>Comment id  is a {comment.id}</h1> 
        <h2>{comment.id}. {comment.text}</h2>
    </div>
  )
}

export default CommentId

export async function getStaticPaths() {
    return {
      paths: [
          {params:{commentId :"1"}},
          {params:{commentId :"2"}},
          {params:{commentId :"3"}},
          {params:{commentId :"4"}},
      ],
      fallback: false
    }
  }

export async function getStaticProps(context) {
    const {params} = context
    const {commentId} = params
    const comment = comments.find(x=>x.id === parseInt(commentId))
    console.log("__________________", comment)
    return {
      props: {
          comment,
      },
    }
  }