import React, {useState} from 'react'

function Comments() {
    const [commentsData, setCommentsData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [comment, setComment] = useState("")

    //fetch data inside api/comments
    // use client side fetch data
    const fetchComments = async () => {
        setIsLoading(true)
        const res = await fetch("/api/comments")
        const data = await res.json()
        setCommentsData(data)
        setIsLoading(false)
    }

    const handlerComments = async () => {
        console.log(comment);
        // when POST req second argument is required
        const res = await fetch("/api/comments",{
            method:"POST",
            body: JSON.stringify({comment}),
            headers:{
                "Content-Type": "application/json"
            },
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <div>
            <h1>All Comments</h1>

            {/* add new comment, keep it in state */}
            <input type="text" value={comment} onChange={(e)=> setComment(e.target.value)}/>
            <button onClick={handlerComments}>Add comments</button><br/><hr/>
            
            {/* load all comments */}
            <button onClick={fetchComments}>Load comments</button>
            
            { isLoading ?
                <h2>Loading...</h2>
            :
                commentsData?.map(x=>
                    <div key= {x.id}>
                        <h2>{x.id}. {x.text}</h2>
                    </div>
                )
            }
        </div>
    ) 
}

export default Comments