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

    FETCH_EVENTS: async () => {
        const cursor = await require('../helpers/mongo').Q_C('Events')
        
        let events = []

        const A = await  cursor.toArray()
        
        for (let i = 0; i < A.length; i++) {
            const uuid = A[i].uuid
            const name = A[i].name
            const msg = A[i].msg
        
            const ev = new Event(uuid, name, msg)
            events.push(ev)
        }
    
        return events
    }
}
