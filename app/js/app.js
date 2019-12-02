// initialize the map
var map = L.map('map').setView([50.10593723843759, 8.660144805908203], 13);

var myLines = [{
    "type": "LineString",
    "coordinates": [
        [
            8.559722900390625,
            50.04986432424855
        ],
        [
            8.57980728149414,
            50.05383234372285
        ],
        [
            8.604869842529297,
            50.05273014900257
        ],
        [
            8.610191345214844,
            50.06639557422427
        ],
        [
            8.617057800292969,
            50.07950631416819
        ],
        [
            8.61825942993164,
            50.08490381227851
        ],
        [
            8.61602783203125,
            50.093494494383805
        ],
        [
            8.61276626586914,
            50.09889041741203
        ],
        [
            8.610963821411133,
            50.10032188683107
        ],
        [
            8.64272117614746,
            50.10301953985844
        ],
        [
            8.643836975097656,
            50.10450593681428
        ]
    ]
}];

//end GeoJSON file
var myStyle = {
    "color": "red",
    "weight": 5,
    "opacity": 0.65
};
// uncomment the style line to see style working.
var linesFeatureLayer = L.geoJSON(myLines, {
    style: myStyle
});

// load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        zoom: 15,
        maxZoom: 17,
        minZoom: 9
    }
).addTo(map);

linesFeatureLayer.addTo(map);