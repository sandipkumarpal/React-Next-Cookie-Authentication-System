import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 64
    },
    phone: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        default: "/avatar.png"
    },
    role: {
        type: [String],
        default: ["Subscriber"],
        enum: ["Subscriber","Instructor", "Admin"]
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {}
},
{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
