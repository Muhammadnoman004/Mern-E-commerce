import jwt from 'jsonwebtoken';
import serverConfig from '../config/server.config.js';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, serverConfig.JwtKey, { expiresIn: '10d' })

    // Set jwt as an HTTP-only cookie
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: serverConfig.NodeEnv != "development",
        sameSite: "strict",
        maxAge: 10 * 24 * 60 * 60 * 1000
    });

    return token;
}

export default generateToken;