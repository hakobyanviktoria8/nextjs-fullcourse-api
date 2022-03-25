import React, {useState} from 'react'


function Comments() {
    const [commentsData, setCommentsData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    //fetch data inside api/comments
    const fetchComments = async () => {
        setIsLoading(true)
        const res = await fetch("/api/comments")
        const data = await res.json()
        setCommentsData(data)
        setIsLoading(false)
    }

    return (
        <div>
            <h1>All Comments</h1>
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