import 'dotenv/config'

export default {
    database: process.env.MONGODB_URI,
    port: 3333,
}