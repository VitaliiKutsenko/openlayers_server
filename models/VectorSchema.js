const { Schema, model } = require('mongoose');

const VectorSchema = new Schema({
    id:{type:String},
        type: { type: String },
        properties: {type: Object},
        geometry: {
          coordinates: {type: Array},
          type: { type: String } ,
    }
}

);

module.exports = model('VectorModel', VectorSchema);

