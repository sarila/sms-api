const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Role} = require('../models');
const JWT_SECRET = process.env.JWT_SECRET || 's e c r e t t t ';

exports.signup = async(req,res) =>{
    try{
        const{ 
            firstName, lastName,
            email, username, password,
            mobile,
            permanentAddress, temporaryAddress
        } = req.body;

        const studentRole = await Role.findOne({ where: { label:'student'}});
        if (!studentRole) throw new Error('Student role not found');

        const hash = await bcrypt.hash(password,12);

        const user = await User.create({
            firstName, lastName,
            email, username, password,
            mobile,
            permanentAddress, temporaryAddress,
            password: hash,
            roleId: studentRole.id
        });

        const token = jwt.sign(
            { sub: user.id, role: studentRole.label},
            JWT_SECRET,
            { expiresIn: '7d'}
        );
        res.status(201).json({user: user.toJSON(),token});
    } catch(err){
        res.status(400).json({error: err.message});
    }
};

exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({where:{email}});
        if(!user) throw new Error('Invalid EMAIL');

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) throw new Error('Invalid PASSWORD');

        const roleRecord = await user.getRole();
        const token = jwt.sign(
            {sub: user.id, role: roleRecord.label},
            JWT_SECRET,
            {expiresIn: '7d'}
        );
        res.json({user: user.toJSON(),token});
    } catch(err){
        res.status(401).json({error: err.message});
    }
};
