'use strict'

/**
 *
 * @Author - Adam In Tae Gerard
 *
 * Events domain.
 */

var Event = function(uuid, name, msg) {
    this.uuid = uuid
    this.name = name
    this.msg = msg
}

module.exports = {
    OBJ_FACTORY: (uuid, name, msg) => new Event(uuid, name, msg),

    JSON_OBJ_FACTORY: (uuid, name, msg) => ({ uuid: uuid, name: name, msg: msg}),

    FETCH_EVENTS: async() => {
        let cursor = await require('../helpers/mongo').Q_C('Events')

        let events = []
        
        cursor.forEach((e) => {
            const uuid = e.uuid
            const name = e.name
            const msg = e.msg

            events.push(new Event(uuid, name, msg))
        })

        return events
    }
}
