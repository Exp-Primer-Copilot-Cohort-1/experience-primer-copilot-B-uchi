// Create web server
var express = require('express');
var router = express.Router();

// Import comments model
var Comments = require('../models/comments');

// Create route for comments
Comments.methods(['get', 'put', 'post', 'delete']);
Comments.register(router, '/comments');

// Export module
module.exports = router;