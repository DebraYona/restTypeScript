import {Request, Response} from 'express'
import User, {IUser} from '../model/User'

import jwt from 'jsonwebtoken';
export const singup = async(req: Request, res: Response) => {
   if (!req.body.email || !req.body.password) {
       return res.status(400).json({msg:"madar email y password"} );
   }

   const user = await User.findOne({email: req.body.email});
   if (user) {
       return res.status(400).json({msg: "este usuario ya exste"});
   }

    const newUser: IUser = new User(
      /*  {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }*/req.body);
    newUser.password = await newUser.encryptPassword(newUser.password);

    const savedUser= await newUser.save();
    
    const token: string = jwt.sign({_id:savedUser._id}, process.env.TOKEN_SECRET ||'tokentest')
    
    res.header('auth_token', token).json(newUser);
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

export const updatePassword = async (req: Request, res: Response) => {
    const user =await User.findById(req.userId, {password: 0});
    if (!user) return res.status(404).json("No user found");
    res.json(user); 
}

