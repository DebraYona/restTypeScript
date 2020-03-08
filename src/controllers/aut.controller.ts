import {Request, Response} from 'express'
import User, {IUser} from '../model/User'

import jwt from 'jsonwebtoken';
export const singup = async(req: Request, res: Response) => {
   
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = await user.encryptPassword(user.password);

    const savedUser= await user.save();
    
    const token: string = jwt.sign({_id:savedUser._id}, process.env.TOKEN_SECRET ||'tokentest')
    
    res.header('auth_token', token).json(user);
}

export const singin =async(req: Request, res: Response) => {
    
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json("correo invalido")

    const password = await user.validatePassword(req.body.password);
    if(!password) return res.status(400).json('contraseña incorrecta')
    
    const token:string = jwt.sign({_id:user._id}, process.env['TOKEN_SECRET']|| '')
    res.header('auth_token', token).json(user);
}

export const profile = async (req: Request, res: Response) => {
    const user =await User.findById(req.userId, {password: 0});
    if (!user) return res.status(404).json("No user found");
    res.json(user); 
}

