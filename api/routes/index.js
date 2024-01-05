const express = require('express');
const router = express.Router();
const index_controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', index_controller.index);

/* GET local activities page. */
router.get('/local-activities', index_controller.local_activities);

/* GET local activities page. */
router.get('/events', function(req, res, next) {
  res.render('index', { title: 'In The Know: In GSO', data: index_controller.local_activities })
});


module.exports = router;
