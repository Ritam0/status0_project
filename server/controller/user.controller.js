import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";
import cloudinary from 'cloudinary';
import fs from 'fs/promises';
const cookieOptions={
    maxAge:7*24*60*60*1000,
    httpOnly:true,
    secure:true
}
const register=async (req,res,next)=>{
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return next (new AppError('All data is required',400));
        }
        const userExists=await User.findOne({email});
        if(userExists){
            return next(new AppError('User Already Exists',400));
        }
        const user=await User.create({
            name,
            email,
            password,
            avatar:{
                public_id:email,
                secure_url:'https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg'
            }
        });
        if(!user){
            return next(new AppError('registration faild!!!!',400));
        }
        //TODO:FILE UPLOAD
        console.log('File Details > ', JSON.stringify(req.file));
        if(req.file){
            try{
                const result = await cloudinary.v2.uploader.upload(req.file.path, {
                    folder: 'lms',
                    width: 250,
                    height: 250,
                    gravity: 'faces',
                    crop: 'fill'
                });
                if(result){
                    user.avatar.public_id = result.public_id;
                    user.avatar.secure_url = result.url;
                    //remove file from server
                   fs.rm(`uploads/${req.file.filename}`)
                }
                
               
                
            }catch(e){
                return await next(new AppError('upload faild try again!!!',500));
            }
        }

        await user.save();
        user.password=undefined;
        const token=await user.generateJWToken();
        res.cookie('token',token,cookieOptions)
        res.status(201).json({
            sucess:true,
            message:"Registration Sucessful"
        })
    }catch(e){
        return await next(new AppError('Invalid Data',400));
    }
    
};
const login=async (req,res,next)=>{
    try{
        const {email , password}=req.body;
        if(!email || !password){
            return await next(new AppError('Invalid Data',400));
        }
        const user=await User.findOne({
            email
        }).select('+password');
        if(!user || !user.comparePassword(password)){
            return next( new AppError('Email or Password Cannot Match',400));
        }
        const token=await user.generateJWToken();
        res.cookie('token',token,cookieOptions)  
        res.status(201).json({
            sucess:true,
            message:"Login Sucessful"
        })
    }catch(e){
        return new AppError(e.message,500);
    }
    
};
const logout=(req,res)=>{
    try{
        const cookieOption={
            expires:new Date(),
            httpOnly:true
        }
        res.cookie('token',null,cookieOption);
        return res.status(200).json({
            success:true,
            message:"logged out"
        })
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
};
const profile=async (req,res)=>{
    try{
        const userId=req.user.id;
        const user=await User.findById(userId);
        res.status(200).json({
            succes:true,
            message:"user data mil geya",
            user
        })
    }catch(e){
        return new AppError(e.message,400);
    }
    
};

export{
    register,
    login,
    logout,
    profile
}