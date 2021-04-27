import jwt from 'express-jwt'

export const signInMiddleware = jwt({
    getToken: (req, res) => req.cookies.token,
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
});
