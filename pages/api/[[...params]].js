export default function handler(req,res){
    const params =req.query.params
    console.log("params______",params);
    // catch all params return [] ->  [ 'one', 'two' ]
    res.status(200).json(params)
}