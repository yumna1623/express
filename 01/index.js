import express from "express";



// const express = require('express')
const app = express()
const port = 5000



app.post('/user', (req, res) => {
  res.json({
    "message " : "user created sucessfully"
  })
})
// app.put
// arr.post -> when we have to give this to user



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
