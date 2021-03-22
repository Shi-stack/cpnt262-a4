const express = require('express');

const router = express.Router();

const galleryJSON = require('../../data/gallery');
// Export as a function so we can pass it args
module.exports = () => {
  router.get('/', (req, res) => {
    // render calls the view engine
    // looks for the page at the path, passes variable pageTitle
    res.json(gallery);
  });
}
module.exports = router;