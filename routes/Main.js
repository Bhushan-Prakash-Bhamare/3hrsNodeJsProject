const express = require('express');
const Controller = require('../controllers/Main');

const router = express.Router();

router.get('/',Controller.getAllItems);

router.post('/items', Controller.postAddItem);

router.get('/items/:id',Controller.getItem);

router.put('/putItem/:id',Controller.putItem);

module.exports = router; 
