import User from '../models/user'
import { getHashedPassword, comparePassword } from '../utils/auth'
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { name, password, email, phone } = req.body
        // Validation
        if(!name && !password && !email && !phone) {
            return res.status(400).send("Name, Password, Email and Phone number required");
        }
        if(!name) return res.status(400).send("Name is required!");
        if(!password || password.length < 6) {
            return res.status(400).send("Password is required and should be min 6 characters long");
        }

        if(!phone || !phone.length === 10) {
            return res.status(400).send("Phone is required and should be 10 Numbers long");
        }

        let userExist = await User.findOne({ email }).exec()
        if(userExist) return res.status(400).send("User Email is taken!");

        const hashedPassword = await getHashedPassword(password)

        const user = new User({ name, email, phone, password: hashedPassword})
        await user.save()

        console.log("Save user", user)
        return res.json({ ok: true})

    } catch (error) {
        console.log({error})
        return res.status(400).send('Error Somthing Wrong')
    }
}

export const login = async (req, res) => {
    try {
        const { password, email } = req.body
        // Validation
        let user = await User.findOne({ email }).exec()
        if(!user) return res.status(400).send("No User found! Please try again.");

        const checkedhashPassword = await comparePassword(password, user.password)

        if (!checkedhashPassword) {
            return res.status(400).send("Wrong Password!!");
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
        
        user.password = undefined;

        res.cookie("token", token, {
            httpOnly: true
        })

        return res.json(user)

    } catch (error) {
        console.log({error})
        return res.status(400).send('Error Somthing Wrong')
    }
}

export const logout = async (req, res) => {
    try {
        await res.clearCookie("token")
        return await res.json({ message: 'Successfully Signout!'})
    } catch (error) {
        console.log({error})
        return res.status(400).send('Error Somthing Wrong')
    }
}

export const currentUser = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("_password").exec();
        console.log('CURRENT USER', {user})
        return res.json(user)
    } catch (error) {
        console.log({error})
        return res.status(400).send('Error Somthing Wrong')
    }
}