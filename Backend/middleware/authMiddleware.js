import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authMiddleware = (req, res, next) => {

    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {

        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log(decoded, 'de data')
        req.userId = decoded.userId;
        next();

    } catch (error) {
        console.log(error)
        res.status(401).json({ message: 'Invalid token' });
    }
}

export default authMiddleware;