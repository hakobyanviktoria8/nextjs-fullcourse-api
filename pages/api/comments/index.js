import { comments } from "../../../data/comments";
const fs = require("fs");

// hendler data local data/comments file
export default function handler(req,res){
    if(req.method === "GET"){
        res.status(200).json(comments)
    } else if(req.method === "POST"){
        const comment = req.body.comment
        const newComment = {
            id: Date.now(),
            text: comment
        }
        fs.writeFileSync('./data.json', JSON.stringify(newComment, null, 2) , 'utf-8');
        comments.push(newComment)
        res.status(201).json(newComment)
    }
}