var express = require('express');
var router = express.Router();

/* GET users listing. */
// always pass fucking message when shit is coming. just to make sure things is okay

// redirect to login page if not authenticated, redirect to profile details if already authenticated.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// homepage user, gallery detail for user
router.get('/:id', function(req, res, next) {
  // --- ___ ---
})

// profile detail (form for edit shit)
router.get('/:id/edit', function(req, res, next) {

})

// URL to post image/gallery
router.post('/post', function(req, res, next) {

})

// URL for view shit detail
router.get('/post/:id', function(req, res, next) {

})

module.exports = router;
