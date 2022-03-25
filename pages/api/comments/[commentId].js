import { comments } from "../../../data/comments"

// find comment in id
export default function handler(req, res){
    const {commentId} = req.query
    const comment = comments.find(x=>x.id === parseInt(commentId))
    res.status(200).json(comment)
}