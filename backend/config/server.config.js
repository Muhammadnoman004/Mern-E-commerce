import 'dotenv/config'

const serverConfig = {
    Port: process.env.PORT,
    dbURI: process.env.MONGO_URI,
    JwtKey: process.env.JWT_SECRET_KEY,
    NodeEnv: process.env.NODE_ENV
}

export default serverConfig;