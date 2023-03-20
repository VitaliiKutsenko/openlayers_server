const {
    setGeoJson,
    getGeoJson,
    getGeoInfo
} = require('../services/geoJson');

const geoJsonControllers = {
    get: {
        async geoJson(req, res, next) {
            try {
                const { username, name } = await req.params;
                const cvCard = await getGeoJson({ username, name });
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
                return res.status(200).json(cvCard);
            } catch (error) {
                next(error);
            }
        },
        async geoJsonInfo(req, res, next) {
            try {
                const { id } = await req.query;
                const info = await getGeoInfo({ id });
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
                return res.status(200).json(info);
            } catch (error) {
                next(error);
            }
        },
    },
    post: {
        async geoJson(req, res, next) {
            try {
                const { body } = await req;                
                const cvCard = await setGeoJson({  body });
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
                return res.status(200).json(cvCard);
            } catch (error) {
                next(error);
            }
        },
    },
   
};

module.exports = geoJsonControllers;
