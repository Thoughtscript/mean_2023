'use strict'

/**
 * @Author - Adam In Tae Gerard
 *
 * Private API.
 */

const express = require('express'),
  privateApi = express.Router(),

  E = require('../services/EventService')

privateApi

  // https://localhost:8888/api/events
  .get("/events", async (req, res) => {
    const responseData = await E.GET()
    return res.send({ status: 200, data: JSON.stringify(responseData) })
  })

console.log(`Private API initialized`)

module.exports = privateApi
