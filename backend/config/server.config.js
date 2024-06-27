import 'dotenv/config'

const serverConfig = {
    Port: process.env.PORT,
    dbURI: process.env.MONGO_URI
}

export default serverConfig;