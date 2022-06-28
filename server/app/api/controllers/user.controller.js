const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const HTTPSTATUSCODE = require ('../../utils/httpStatusCode');

const register = async (req, res, next) => {
    try {
        const newUser = new User (req.body);
        const newUserDB = await newUser.save();
        return res.json({
            status:201,
            message: HTTPSTATUSCODE[201],
            data:null,
        });
    } catch (error) {
        return next (error);
    }
};

const login = async (req, res, next) => {
    try{
        const userInfo = await User.findOne({email: req.body.email});
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            userInfo.password = null;
            const token = jwt.sign(
                {
                    id: userInfo._id,
                    email: userInfo.email,
                },
                req.app.get('secretKey'),
                {
                    expiresIn: '1h',
                }
            );

            return res.json({
                status:200,
                message: HTTPSTATUSCODE[200],
            data: {user: userInfo, token: token}});

        }
    } catch (error){
        return next(error);
    }
};

module.exports = {
    register, 
    login,
};