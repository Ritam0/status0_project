import AppError from "../utils/error.util.js";
import jwt from 'jsonwebtoken';
const isLoggedIn = async (req, res, next) => {
    try {
      const { token } = req.headers.authorization;
      console.log('Received token:', token);
  
      const userDetails = await jwt.verify(token, process.env.JWT_SECRET);
      console.log('Decoded user details:', userDetails);
  
      req.user = userDetails;
      next();
    } catch (error) {
      console.error(error);
      return next(new AppError('Please Login at first!!', 400));
    }
  };
  
export{
    isLoggedIn
}