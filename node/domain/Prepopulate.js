'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Prepopulate runner.
 */

const M = require('../helpers/mongo')
const E = require('../domain/Events')

const INSERT_EVENTS = () => new Promise((resolve, reject) => {
    M.COL("Events").then(collection => {
        collection.insertMany(
            [
                E.JSON_OBJ_FACTORY(1, "testA", "msgA"),
                E.JSON_OBJ_FACTORY(2, "testB", "msgB"),
                E.JSON_OBJ_FACTORY(3, "testC", "msgC")

            ]).then(success1 => {
                console.log("Collection initialized with data ...")

                E.FETCH_EVENTS().then(success2 => {
                    console.log(success2)
                    return resolve(success2)
                })
            })
    })
})

module.exports = {
    INITIALIZE_DB: () => new Promise((resolve, reject) => {
        console.log("Initializing DB...")

        M.Q_COL("Events").then(success1 => {
            console.log("Collection initialized ...")

            INSERT_EVENTS().then(success2 => resolve(success2))

        }, reject1 => {
            INSERT_EVENTS().then(success2 => resolve(success2))
        })
    })
}
