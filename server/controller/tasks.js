var express = require('express');
var router = express.Router();

const Task = require('../models/task')
const globals = require('../../config/globals')

// allow cross origin request
router.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin', globals.clientRoot);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Request-with, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next()
})

/* GET home page. */
router.get('/', (req, res, next) => {
  Task.find((err, tasks)=>{
    if(err)
    {
      return res.send(err).status(400)
    }
    else
      {
      res.json(tasks).status(200)
    }
  })
});

/* GET one db. */
router.get('/:_id', (req, res, next) => {
  Task.findById(req.params._id,(err, tasks) => {
    if(err)
    {
      return res.send(err).status(400)
    }
    else
    {
      res.json(tasks).status(200)
    }
  })
});

/* POST. */
router.post('/', (req, res, next) =>
{
  Task.create({
    name: req.body.name,
    complete: req.body.complete,
    priority: req.body.priority
  }, (err, tasks) => {
    if(err)
    {
      return res.send(err).status(400)
    }
    else
    {
      res.json(tasks).status(201)
    }
  })
});

/* DELETE */
router.delete('/:_id', (req, res, next) =>
{
  Task.remove({_id: req.params._id}, (err, tasks) => {
    if(err)
    {
      return res.send(err).status(400)
    }
    else
    {
      res.json(tasks).status(200)
    }
  })
});

/* update */
router.put('/:_id', (req, res, next) =>
{
  var _id = req.params._id
  Task.update({
    _id: _id,
    name: req.body.name,
    complete: req.body.complete,
    priority: req.body.priority
  }, (err, tasks) => {
    if(err)
    {
      return res.send(err).status(400)
    }
    else
    {
      res.json(tasks).status(200)
    }
  })
});

module.exports = router;
