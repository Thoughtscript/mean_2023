'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Mongo helpers.
 */

const { MongoClient } = require("mongodb")
const C = require('../config')

// Singleton client
let client

const getClient = async () => {
    try {
        if (client === undefined) {
            client = new MongoClient(C.DB.MONGO_URI)
            await client.connect()
        }
    } catch (ex) {
        console.error(ex)
    }
    return client
}

module.exports = {
    // Query Collection
    Q_C: async (collection) => {
        let db = await getClient().db(C.DB.DEFAULT_DB)
        let db_collection = db.collection(collection)
        return db_collection.find()
    },

    // Ensure the DB connection is closed where needed.
    DB_EXIT: async () => {
        try {
            if (client !== undefined) {
                await client.close()
            }
        } catch (ex) {
            console.error(ex)
        }
        console.log("DB Client closed!")
        return
    }
}
