const Router = require('express');
const router = new Router();

const geoJsonControllers = require('../controllers/geoJson');


router.get('/geojson', geoJsonControllers.get.geoJson);
router.get('/geoinfo/:id', geoJsonControllers.get.geoJsonInfo);

router.post('/geojson', geoJsonControllers.post.geoJson);


module.exports = router;
