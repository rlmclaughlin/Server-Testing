const express = require('express')
const knex = require('knex')
const server = express();
const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development)
const PORT = 5656

server.use(express.json())

server.get('/api/user', (req, res) => {
    db('user').then(user => {
        res.status(200).json(user)
    })
    .catch(error => { res.status(400).json({ error: 'There was an error'})
  })
})

server.post('/api/user', (req, res) => {
    const body = req.body
    db('user').insert(body).then( id => {
        res.status(201).json(id)
    })
    .catch(error => { res.status(400).json({error: "There was an error posting the user"})
  })
})

server.delete('/api/user/:id', (req, res) => {
    const {id} = req.params
    db('user').where({id}).del()
      .then( id => {
          res.status(201).json(id)
      })
      .catch(error => { res.status(400).json({error: "There was an error deleting the user"})
    })
})


server.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})