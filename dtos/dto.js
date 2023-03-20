const fullGeoJSON = {
    type: "FeatureCollection",
    features: []
}

module.exports = geoJsonDTO = (doc) => {
   
return {...fullGeoJSON,features:[...doc]}
}
