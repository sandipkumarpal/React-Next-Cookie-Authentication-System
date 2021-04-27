import jwt from 'express-jwt'

export const signInMiddleware = jwt({
    getToken: () => req.cookie.token,
    secret: process.env.JWT_SECRET,
    algorithms: ["HS265"]
});
