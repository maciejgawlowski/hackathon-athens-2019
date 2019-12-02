// initialize the map
var map = L.map('map').setView([50.10593723843759, 8.660144805908203], 13);

var trainLine = [{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        8.6627197265625,
                        50.10709325852497
                    ],
                    [
                        8.63302230834961,
                        50.095752046320975
                    ],
                    [
                        8.630447387695312,
                        50.09365968471758
                    ],
                    [
                        8.630018234252928,
                        50.092007755753514
                    ],
                    [
                        8.630704879760742,
                        50.08969495953111
                    ],
                    [
                        8.631649017333984,
                        50.08837331157491
                    ],
                    [
                        8.64126205444336,
                        50.07565058628708
                    ],
                    [
                        8.64199161529541,
                        50.07419083696138
                    ],
                    [
                        8.641862869262695,
                        50.07275858688542
                    ],
                    [
                        8.640918731689453,
                        50.07113348210946
                    ],
                    [
                        8.638300895690918,
                        50.06970114071545
                    ],
                    [
                        8.636155128479004,
                        50.06904004564326
                    ],
                    [
                        8.62752914428711,
                        50.06642312155306
                    ],
                    [
                        8.625040054321289,
                        50.065128379996736
                    ],
                    [
                        8.623323440551758,
                        50.06204289754017
                    ],
                    [
                        8.620405197143555,
                        50.05851638885174
                    ],
                    [
                        8.618731498718262,
                        50.05653261379511
                    ],
                    [
                        8.616929054260254,
                        50.05545803472524
                    ],
                    [
                        8.612937927246094,
                        50.053915007306294
                    ],
                    [
                        8.609890937805176,
                        50.053391468872704
                    ],
                    [
                        8.607831001281738,
                        50.05328124952725
                    ],
                    [
                        8.59903335571289,
                        50.05336391406007
                    ],
                    [
                        8.591351509094238,
                        50.05397011628283
                    ],
                    [
                        8.583712577819824,
                        50.05441098581656
                    ],
                    [
                        8.577790260314941,
                        50.05416299720227
                    ],
                    [
                        8.572854995727539,
                        50.0536945707673
                    ],
                    [
                        8.562941551208496,
                        50.05165548477533
                    ]
                ]
            }
        }
    ]
}];

var carLine = [{
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
var carLineStyle = {
    "color": "red",
    "weight": 5,
    "opacity": 0.65
};

var trainLineStyle = {
    "color": "green",
    "weight": 5,
    "opacity": 0.65
};
// uncomment the style line to see style working.
var carLineFeatureLayer = L.geoJSON(carLine, {
    style: carLineStyle
});

var trainLineFeatureLayer = L.geoJSON(trainLine, {
    style: trainLineStyle
});

// load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
        zoom: 15,
        subdomains: 'abc',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }
).addTo(map);

carLineFeatureLayer.addTo(map);
trainLineFeatureLayer.addTo(map);

$(document).ready(function () {

    console.log('whatever');

});

//show or hide table row details
$(".table-row").click(function () {
    if ($(this).find('.table-row-details').is(":hidden")) {
        $(this).find('.table-row-details').slideDown("slow");
    } else {
        $(this).find('.table-row-details').slideUp("slow");
    }
});
