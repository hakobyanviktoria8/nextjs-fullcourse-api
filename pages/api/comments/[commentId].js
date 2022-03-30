import { comments } from "../../../data/comments"

// find comment in id
export default function handler(req, res){
    const {commentId} = req.query
    console.log("commentId ________ ",commentId);
    if(req.method === "GET"){
        const comment = comments.find(x=>x.id === parseInt(commentId))
        res.status(200).json(comment)
    } else if(req.method === "DELETE"){
        const deleteComment = comments.find(x=>x.id === parseInt(commentId))
        const idx = comments.findIndex(x=>x.id === parseInt(commentId))
        // remove thats id comment
        comments.splice(idx,1)
        res.status(200).json(deleteComment)
    }
}