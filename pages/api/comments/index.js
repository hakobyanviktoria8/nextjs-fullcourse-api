import { comments } from "../../../data/comments";

// hendler data local data/comments file
export default function handler(req,res){
    res.status(200).json(comments)
}