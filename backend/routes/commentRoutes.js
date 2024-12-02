const express = require('express');
const { addComment, getComments } = require('../controllers/commentController');

const router = express.Router();

// Route for adding a comment
router.post('/', addComment);

// Route for fetching comments
router.get('/', getComments);

module.exports = router;