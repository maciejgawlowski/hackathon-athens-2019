var TRANSPORT_TYPE = {
    TRAIN: "train",
    CAR: "car",
    ECAR: "electric-car",
    BUS: "bus"
};

var map = L.map('map').setView([50.08, 8.64], 11);


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
                        8.68692398071289,
                        50.117386111717956
                    ],
                    [
                        8.633666038513184,
                        50.09583463766768
                    ],
                    [
                        8.631198406219482,
                        50.09441679979418
                    ],
                    [
                        8.630340099334717,
                        50.092902557678066
                    ],
                    [
                        8.630146980285645,
                        50.09173242872291
                    ],
                    [
                        8.630597591400146,
                        50.09042460372481
                    ],
                    [
                        8.63175630569458,
                        50.088029126437995
                    ],
                    [
                        8.633365631103516,
                        50.08582628303026
                    ],
                    [
                        8.641669750213623,
                        50.075113513872374
                    ],
                    [
                        8.642141819000244,
                        50.07380523538
                    ],
                    [
                        8.641777038574217,
                        50.07248314927408
                    ],
                    [
                        8.640918731689453,
                        50.071353838526875
                    ],
                    [
                        8.638815879821776,
                        50.069838867708484
                    ],
                    [
                        8.634910583496092,
                        50.06857176445346
                    ],
                    [
                        8.628044128417969,
                        50.06705670574863
                    ],
                    [
                        8.625383377075195,
                        50.065596694806906
                    ],
                    [
                        8.62401008605957,
                        50.0638060546746
                    ],
                    [
                        8.620576858520508,
                        50.05892966499788
                    ],
                    [
                        8.6187744140625,
                        50.05713877598689
                    ],
                    [
                        8.616886138916016,
                        50.05532026643736
                    ],
                    [
                        8.614139556884766,
                        50.05419055155604
                    ],
                    [
                        8.611006736755371,
                        50.053419023669505
                    ],
                    [
                        8.605341911315918,
                        50.05314347498943
                    ],
                    [
                        8.60727310180664,
                        50.05284036961384
                    ],
                    [
                        8.578433990478514,
                        50.05460386496385
                    ]
                ]
            }
        }]
}];

var carLine = [{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        8.68767499923706,
                        50.1176337734385
                    ],
                    [
                        8.688082695007324,
                        50.11229500363558
                    ],
                    [
                        8.687653541564941,
                        50.10995566437051
                    ],
                    [
                        8.68743896484375,
                        50.10670792159607
                    ],
                    [
                        8.674049377441406,
                        50.101202769829456
                    ],
                    [
                        8.65945816040039,
                        50.08842838096743
                    ],
                    [
                        8.65598201751709,
                        50.08121375173522
                    ],
                    [
                        8.653578758239746,
                        50.07386032151005
                    ],
                    [
                        8.648300170898438,
                        50.058874561717424
                    ],
                    [
                        8.644351959228516,
                        50.05791024406449
                    ],
                    [
                        8.635725975036621,
                        50.055044728674886
                    ],
                    [
                        8.626670837402344,
                        50.05306081007687
                    ],
                    [
                        8.625125885009766,
                        50.052564817611
                    ],
                    [
                        8.621263504028319,
                        50.05226170858033
                    ],
                    [
                        8.615083694458008,
                        50.052564817611
                    ],
                    [
                        8.601264953613281,
                        50.053391468872704
                    ],
                    [
                        8.57534408569336,
                        50.05317102992865
                    ]
                ]
            }
        }]
}];

var busLine = [
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
                            8.688468933105469,
                            50.11755121967399
                        ],
                        [
                            8.693060874938965,
                            50.11540477183323
                        ],
                        [
                            8.693275451660156,
                            50.11485438509181
                        ],
                        [
                            8.692502975463867,
                            50.109460260216686
                        ],
                        [
                            8.692975044250488,
                            50.108882282226766
                        ],
                        [
                            8.692588806152344,
                            50.10670792159607
                        ],
                        [
                            8.691773414611816,
                            50.10414810472552
                        ],
                        [
                            8.690614700317383,
                            50.10274427610123
                        ],
                        [
                            8.691387176513672,
                            50.100431998091686
                        ],
                        [
                            8.689756393432617,
                            50.09988143925776
                        ],
                        [
                            8.688082695007324,
                            50.09908311770978
                        ],
                        [
                            8.6812162399292,
                            50.09525649525118
                        ],
                        [
                            8.673362731933594,
                            50.09079630498632
                        ],
                        [
                            8.655853271484375,
                            50.08093836269245
                        ],
                        [
                            8.655166625976562,
                            50.07887289444531
                        ],
                        [
                            8.65447998046875,
                            50.07719291464891
                        ],
                        [
                            8.648343086242676,
                            50.058764354966634
                        ],
                        [
                            8.64572525024414,
                            50.05757961640731
                        ],
                        [
                            8.625297546386719,
                            50.05273014900257
                        ],
                        [
                            8.577747344970703,
                            50.0539425618025
                        ]
                    ]
                }
            }
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

var busLineStyle = {
    "color": "blue",
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

var busLineFeatureLayer = L.geoJSON(busLine, {
    style: busLineStyle
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


var destPoint = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    8.571664094924927,
                    50.051200811895846
                ]
            }
        }
    ]
};

var startPoint = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    8.687750101089478,
                    50.11760453566317]
            }
        }
    ]
};

L.geoJSON([startPoint, destPoint], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },

    // onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

$(document).ready(function () {
    console.log('whatever');
});

$("#test-btn").click(function () {
    console.info("test btn click");

    map.removeLayer(carLineFeatureLayer);
});

//show or hide table row details
$(".table-row").click(function () {
    var transportType = $(this).data("transport-type");
    hideAllLayer();
    if ($(this).find('.table-row-details').is(":hidden")) {
        $('.table-row').not(this).each(function () {
            hideDetails.call(this);
        });
        $(this).find('.table-row-details').slideDown("slow");
        $(this).find('.table-row-details').css("display", "grid");
        showLayer($(this), transportType);
    } else {
        hideDetails.call(this);
        hideAllLayer();
    }
});

function hideAllLayer() {
    map.removeLayer(busLineFeatureLayer);
    map.removeLayer(carLineFeatureLayer);
    map.removeLayer(carLineFeatureLayer);
    map.removeLayer(trainLineFeatureLayer);
}

function showLayer(element, transportType) {
    console.info("showL " + transportType);
    switch (transportType) {
        case TRANSPORT_TYPE.BUS:
            console.info("BUS");
            map.addLayer(busLineFeatureLayer);
            break;
        case TRANSPORT_TYPE.CAR:
            console.info("CAR");
            map.addLayer(carLineFeatureLayer);
            break;
        case TRANSPORT_TYPE.ECAR:
            console.info("ECAR");
            map.addLayer(carLineFeatureLayer);
            break;
        case TRANSPORT_TYPE.TRAIN:
            console.info("TRAIN");
            map.addLayer(trainLineFeatureLayer);
            break;
        default:
            console.info("todo")
    }
}

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
