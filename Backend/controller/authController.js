import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils/jwtCreate.js";
import { validateLogin, validateSignup } from "../validations/authValidation.js";

// Register a new user
export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const errors = validateSignup(req.body);
    console.log('he')
    if (errors) {
        return res.status(400).json({ errors });
    }

    try {
        const hashPassword = await bcrypt.hash(password, 10)
        const user = new userModel({ name, email, password: hashPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Login a user
export const login = async (req, res) => {
    const { email, password } = req.body;

    const errors = validateLogin(req.body);
    if (errors) {
        return res.status(400).json({ errors });
    }

    try {
        const user = await userModel.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = generateToken(user._id);

        res.status(200).json({ success: true, messsage: 'Login successful', token });
    } catch (error) {
        console.log('ero')
        res.status(500).json({ error: error.message });
    }
}