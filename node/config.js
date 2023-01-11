'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Config.
 */

// Note that these correspond to the non-root user/password in docker-compose.yml
const MONGODB_USERNAME = 'testuser'
const MONGODB_PASSWORD = 'testpass'

module.exports = {
    SERVER: {
        CORS: 'http://localhost:4200',
        HTTPS_PORT: 8888,
        SSL: {
            KEY_PATH: '../auth/key.pem',
            CERT_PATH: '../auth/certificate.pem',
        }
    },

    DB: {
        DEFAULT_DB: "testdatabase",
        // Must authenticate against the specified testdatabase with the credentials above
        MONGO_URI: `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@localhost:27017/testdatabase`
    }
}
