'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Prepopulate runner.
 */

const M = require('../helpers/mongo')
const E = require('../domain/Events')

module.exports = {
    INITIALIZE_DB: async() => {
        await M.Q_C('Events').insertMany(
            [
                E.JSON_OBJ_FACTORY(1, "testA", "msgA"), 
                E.JSON_OBJ_FACTORY(2, "testB", "msgB"), 
                E.JSON_OBJ_FACTORY(3, "testC", "msgC")
            ]
        )
    }
}
