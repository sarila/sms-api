const jwt = require('jsonwebtoken');
const { User } = require('../models');
module.exports = async(req,res,next)=>{
    try{
        const auth = req.headers.authorization?.split(' ')[1];
        if(!auth) throw new Error();
        const payload = jwt.verify(auth,JWT_SECRET);
        req.user = await User.findbyPk(payload.sub);
        next();
    } catch{
        res.status(401).json({error:'Unauthorized'});
    }
};
