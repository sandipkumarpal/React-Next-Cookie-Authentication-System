import User from '../models/user'
import {getHashedPassword, comparePassword} from '../utils/auth'

export const register = async (req, res) => {
    // console.log(req.body)
    // res.send('Register use response from controller!!')
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
