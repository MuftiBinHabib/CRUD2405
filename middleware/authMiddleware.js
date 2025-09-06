function authMiddleware(req,res,next){
let {token} =req.headers;

if ( token == 123){
    next()
}else {
    res.status(401).send({
        success:false,
        msg:"unauthorized",

    })
    
}
}

module.exports = authMiddleware;