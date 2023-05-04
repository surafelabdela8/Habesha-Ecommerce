import express from 'express'
import User from '../models/userModel.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter=express.Router();

userRouter.route('/seed')
    .get(
        expressAsyncHandler(async (req, res) => {  //express async handeler used to avoid the loading when there is an error 
            await User.deleteMany({});
            const createdUser = await User.insertMany(data.users);
            res.send({ createdUser });
        })
    );


export default userRouter