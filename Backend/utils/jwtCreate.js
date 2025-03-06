import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const generateToken = (id) => {

    const payload = {
        userId: id
    }
    
    const accessToken = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '15min' });
    const refreshToken = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '7d' })

    return { accessToken, refreshToken }
}