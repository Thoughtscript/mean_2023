'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * EventService.
 */

const E = require('../domain/Events')

module.exports = {
    GET: async () => {
        const events = await E.FETCH_EVENTS()
        return events
    }
}
