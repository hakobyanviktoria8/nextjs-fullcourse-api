import React from 'react'
import { useRouter } from 'next/router'

// imports all comments here
import { comments } from "../../data/comments";

function CommentId() {
    const router = useRouter()
    const id = router.query.commentId
    console.log(comments)

  return (
    <div>
        <h1>Comment id  is a {id}</h1> 
        <h2>{comments[id]?.id} . {comments[id]?.text}</h2>
    </div>
  )
}

export default CommentId

// didn't working TypeError Only absolute URLs are supported
// export async function getServerSideProps(context) {
//     const params = {context}
//     const id = {params}
//     console.log(params)
//     const res = await fetch(`/api/comments/${id}`)
//     const data = await res.json()
//     console.log(data)
//     return {
//       props: {
//           comment : data
//       }, // will be passed to the page component as props
//     }
//   }