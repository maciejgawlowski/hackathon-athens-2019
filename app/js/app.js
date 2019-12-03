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

var bikeLine = [
    {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            8.663063049316406,
                            50.10312964491842
                        ],
                        [
                            8.658256530761719,
                            50.100982550598395
                        ],
                        [
                            8.650188446044922,
                            50.09844995667801
                        ],
                        [
                            8.640575408935547,
                            50.09542167951057
                        ],
                        [
                            8.634910583496092,
                            50.092723598629846
                        ],
                        [
                            8.631391525268555,
                            50.091457100110425
                        ],
                        [
                            8.619203567504883,
                            50.090631104781586
                        ],
                        [
                            8.617315292358398,
                            50.09085137159468
                        ],
                        [
                            8.618345260620115,
                            50.08336173197496
                        ],
                        [
                            8.617057800292969,
                            50.078129304092016
                        ],
                        [
                            8.613882064819336,
                            50.07223525407118
                        ],
                        [
                            8.609418869018555,
                            50.06336527146654
                        ],
                        [
                            8.604011535644531,
                            50.05306081007687
                        ],
                        [
                            8.588390350341797,
                            50.0536119068041
                        ],
                        [
                            8.583412170410156,
                            50.0539425618025
                        ],
                        [
                            8.578691482543945,
                            50.053887452794314
                        ],
                        [
                            8.575172424316406,
                            50.05306081007687
                        ],
                        [
                            8.566503524780273,
                            50.051683040568975
                        ],
                        [
                            8.564014434814453,
                            50.05002966494399
                        ],
                        [
                            8.561868667602537,
                            50.049533641148784
                        ],
                        [
                            8.554143905639648,
                            50.04799042322258
                        ]
                    ]
                }
            }
        ]
    }
];

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

var bikeLineStyle = {
    "color": "yellow",
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

var bikeLineFeatureLayer = L.geoJSON(bikeLine, {
    style: bikeLineStyle
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
bikeLineFeatureLayer.addTo(map);

$(document).ready(function () {

    console.log('whatever');

});

//show or hide table row details
$(".table-row").click(function () {
    if ($(this).find('.table-row-details').is(":hidden")) {
        $('.table-row').not(this).each(function () {
            hideDetails.call(this);
        });
        $(this).find('.table-row-details').slideDown("slow");
        $(this).find('.table-row-details').css("display", "grid");
    } else {
        hideDetails.call(this);
    }
});

function hideDetails() {
    $(this).find('.table-row-details').slideUp("slow");
}

$(function () {
    var startPointsTAG = [
        "Frankfurt Berliner Straße (Frankfurt am Main)",
        "Frankfurt Börsenstraße",
        "Frankfurt Freßgass",
        "Frankfurt Goethestraße",
        "Frankfurt Hauptwache (Frankfurt am Main)",
        "Frankfurt Hochstraße (Frankfurt)",
        "Frankfurt Kaiserhofstraße",
        "Frankfurt Konstablerwache",
        "Frankfurt Mainzer Landstraße",
        "Frankfurt Saalgasse",
        "Frankfurt Schaumainkai",
        "Frankfurt Zeil"
    ];

    var endPointTAG = [
        "Frankfurt Airport Main",
        "Frankfurt Airport East"
    ];

    $("#end-point-input").autocomplete({
        source: startPointsTAG
    });
    $("#start-point-input").autocomplete({
        source: endPointTAG
    });
});
