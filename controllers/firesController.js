const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');
const Posts = require('../models/posts.js');
const Fires = require('../models/fires.js')

// Create index route
 router.get('/', async (req, res) => {
  console.log(req.session, ' on fire')
     try  {
      const allFires = await Fires.find();

      res.json({
        status: 200,
        data: allFires
      })

    } catch (err){
      res.send(err)
    }
});

router.post('/', async (req, res) => {
  console.log("******************************")
  console.log(req.session, " this is req.session in the post route")
  console.log("******************************")

  try {
    console.log(req.body, ' this is req.body');
    const createdFires = await Fires.create(req.body);

    res.json({
      status: 200,
      data: createdFires
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});

router.get('/:id', async (req, res) => {

     try  {
        const foundFires = await Fires.findById(req.params.id);
        res.json({
          status: 200,
          data: foundFires
        });

      } catch (err){
        res.send(err);
      }
});

module.exports = router;
