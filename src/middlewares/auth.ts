import {Request, Response, NextFunction} from 'express'
import AppError from '../errors/AppError'

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  if(authHeader !== process.env.SECRET_KEY){
    throw new AppError('Not allowed', 401)
  }
  return next();

}
