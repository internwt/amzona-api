import express from 'express'
import Controller from './UserController'
const app = express.Router({ mergeParams: true });

app.post('/signup',Controller.signUp)


module.exports = app