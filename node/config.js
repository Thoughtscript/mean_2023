'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Config.
 */

const ME_CONFIG_MONGODB_ADMINUSERNAME = 'root'
const ME_CONFIG_MONGODB_ADMINPASSWORD = 'example'

module.exports = {
    SERVER: {
        HTTPS_PORT: 8888,
        SSL: {
            KEY_PATH: '../auth/key.pem',
            CERT_PATH: '../auth/certificate.pem',
        }
    },

    DB: {
        DEFAULT_DB: "testdb",
        MONGO_URI: `mongodb+srv://${ME_CONFIG_MONGODB_ADMINUSERNAME}:${ME_CONFIG_MONGODB_ADMINPASSWORD}@mongo:27017/?retryWrites=true&writeConcern=majority`
    }
}
