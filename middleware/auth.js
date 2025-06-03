require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');
module.exports = async(req,res,next)=>{
    try{
        const auth = req.headers.authorization?.split(' ')[1];
        if(!auth) throw new Error();
        const payload = jwt.verify(auth,process.env.JWT_SECRET);
        const user = await User.findByPk(payload.sub);
        req.user = user;
        next();
    } catch{
        res.status(401).json({error:'Unauthorized'});
    }
};
