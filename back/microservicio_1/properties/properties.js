require('dotenv').config();
module.exports = {
    configDb:{
        user: process.env.USERDB,
        password: process.env.PASSWORD,
        server: process.env.SERVER,
        database: process.env.DATABASE,
        port:1434,
        options: {
            trustedConnection: true,
            encrypt: true,
            enableArithAbort: true,
            trustServerCertificate: true,
            }
        }
}