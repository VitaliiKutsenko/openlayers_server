const ApiErrors = require('../exceptions/api-errors');
const VectorModel = require('../models/VectorSchema');
const geoJsonDTO = require('../dtos/dto')
const { ObjectId } = require('mongodb');

const getGeoJson = async ({ data }) => {
    const vectorData = await VectorModel.find({},{
        'properties':0,
        ['__v']:0,
    }).then((doc) => !doc ? ApiErrors.BadRequestError('not found') : doc )
     .catch((err) => err ? ApiErrors.BadRequestError('error') : null);
     return geoJsonDTO(vectorData)
};

const getGeoInfo = async ({ id }) => {
    const vectorData = await VectorModel.find({id},{
        'properties':1,
        'id':1,
        '_id':0
    }).then((doc) => !doc ? ApiErrors.BadRequestError('not found') : doc )
     .catch((err) => err ? ApiErrors.BadRequestError('error') : null);
     return vectorData
};

const setGeoJson = async ({ body }) => {
   const {features} = body;
   await features.forEach(element => {
    VectorModel.create({...element,id:ObjectId()})
   });
     
};

module.exports = {
    getGeoJson,
    setGeoJson,
    getGeoInfo
}
