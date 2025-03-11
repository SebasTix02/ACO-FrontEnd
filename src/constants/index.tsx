import { Pedido, Ruta } from "../interfaces/interfaces";

export const coordenadasProvincias = [
    {
      name: 'Azuay',
      bounds: {
        minLat: -3.3667, maxLat: -2.4667,
        minLon: -79.5000, maxLon: -78.5000
      }
    },
    {
      name: 'Bolívar',
      bounds: {
        minLat: -2.1667, maxLat: -1.3333,
        minLon: -79.5000, maxLon: -78.5000
      }
    },
    {
      name: 'Cañar',
      bounds: {
        minLat: -2.9167, maxLat: -2.2500,
        minLon: -79.3333, maxLon: -78.5000
      }
    },
    {
      name: 'Carchi',
      bounds: {
        minLat: 0.5000, maxLat: 1.3333,
        minLon: -78.5000, maxLon: -77.5000
      }
    },
    {
      name: 'Chimborazo',
      bounds: {
        minLat: -2.5000, maxLat: -1.5000,
        minLon: -79.0000, maxLon: -78.0000
      }
    },
    {
      name: 'Cotopaxi',
      bounds: {
        minLat: -1.1667, maxLat: -0.1667,
        minLon: -79.0000, maxLon: -78.0000
      }
    },
    {
      name: 'El Oro',
      bounds: {
        minLat: -3.8333, maxLat: -3.0000,
        minLon: -80.1667, maxLon: -79.5000
      }
    },
    {
      name: 'Esmeraldas',
      bounds: {
        minLat: 0.5000, maxLat: 1.5000,
        minLon: -79.8333, maxLon: -78.5000
      }
    },
    {
      name: 'Galápagos',
      bounds: {
        minLat: -1.9167, maxLat: -0.5000,
        minLon: -91.5000, maxLon: -89.0000
      }
    },
    {
      name: 'Guayas',
      bounds: {
        minLat: -2.4549, maxLat: -1.5166,
        minLon: -80.3667, maxLon: -79.2333
      }
    },
    {
      name: 'Imbabura',
      bounds: {
        minLat: 0.0833, maxLat: 0.9167,
        minLon: -78.5000, maxLon: -77.5000
      }
    },
    {
      name: 'Loja',
      bounds: {
        minLat: -4.5000, maxLat: -3.5000,
        minLon: -80.0000, maxLon: -79.0000
      }
    },
    {
      name: 'Los Ríos',
      bounds: {
        minLat: -1.8333, maxLat: -0.8333,
        minLon: -79.8333, maxLon: -78.8333
      }
    },
    {
      name: 'Manabí',
      bounds: {
        minLat: -1.5000, maxLat: -0.1667,
        minLon: -80.8333, maxLon: -79.5000
      }
    },
    {
      name: 'Morona Santiago',
      bounds: {
        minLat: -3.3333, maxLat: -2.0000,
        minLon: -78.5000, maxLon: -77.0000
      }
    },
    {
      name: 'Napo',
      bounds: {
        minLat: -1.5000, maxLat: -0.1667,
        minLon: -78.0000, maxLon: -76.5000
      }
    },
    {
      name: 'Orellana',
      bounds: {
        minLat: -1.1667, maxLat: -0.1667,
        minLon: -76.5000, maxLon: -75.0000
      }
    },
    {
      name: 'Pastaza',
      bounds: {
        minLat: -2.3333, maxLat: -1.0000,
        minLon: -77.5000, maxLon: -75.5000
      }
    },
    {
      name: 'Pichincha',
      bounds: {
        minLat: -0.5116, maxLat: 0.0987,
        minLon: -78.9064, maxLon: -78.1834
      }
    },
    {
      name: 'Santa Elena',
      bounds: {
        minLat: -2.3333, maxLat: -1.8333,
        minLon: -81.0000, maxLon: -80.3333
      }
    },
    {
      name: 'Santo Domingo de los Tsáchilas',
      bounds: {
        minLat: -0.5000, maxLat: 0.5000,
        minLon: -79.5000, maxLon: -78.5000
      }
    },
    {
      name: 'Sucumbíos',
      bounds: {
        minLat: 0.0000, maxLat: 1.0000,
        minLon: -77.0000, maxLon: -75.0000
      }
    },
    {
      name: 'Tungurahua',
      bounds: {
        minLat: -1.5000, maxLat: -0.8333,
        minLon: -78.8333, maxLon: -78.0000
      }
    },
    {
      name: 'Zamora Chinchipe',
      bounds: {
        minLat: -4.8333, maxLat: -3.5000,
        minLon: -79.0000, maxLon: -77.5000
      }
    }
  ];

  export const optimizedRoutes: Ruta[] = [
    {
        id: '1',
        nombre: 'Ruta Norte Quito',
        geojson: {
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {
                  "orden": 1,
                  "tracking_id": "TLMKA00246533",
                  "distancia_acumulada": 0.0
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.60796846310403,
                    -1.221758392
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 2,
                  "tracking_id": "TLMKA00247054",
                  "distancia_acumulada": 1.34
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.59590215860166,
                    -1.225119429
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 3,
                  "tracking_id": "TLMKA00264983",
                  "distancia_acumulada": 3.18
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.58046022972957,
                    -1.2548432764837258
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 4,
                  "tracking_id": "TLMKA00247458",
                  "distancia_acumulada": 6.74
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.61209363154917,
                    -1.279294345
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 5,
                  "tracking_id": "TLMKA00267830",
                  "distancia_acumulada": 6.83
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.61234654232817,
                    -1.283089822
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 6,
                  "tracking_id": "TLMKA00275563",
                  "distancia_acumulada": 7.54
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.61869750072543,
                    -1.278292221
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 7,
                  "tracking_id": "TLMKA00249805",
                  "distancia_acumulada": 8.54
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.62693152097586,
                    -1.259863295
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 8,
                  "tracking_id": "TLMKA00263572",
                  "distancia_acumulada": 10.239999999999998
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.64116294,
                    -1.231845098576045
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 9,
                  "tracking_id": "TLMKA00256753",
                  "distancia_acumulada": 12.21
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.65892133465775,
                    -1.2310977267718215
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 10,
                  "tracking_id": "TLMKA00242238",
                  "distancia_acumulada": 16.22
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.62296365547924,
                    -1.244904661
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "orden": 11,
                  "tracking_id": "TLMKA00246533",
                  "distancia_acumulada": 17.959999999999997
                },
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -78.60796846310403,
                    -1.221758392
                  ]
                }
              },
              {
                "type": "Feature",
                "properties": {
                  "tipo": "ruta_completa",
                  "distancia_total": 17.959999999999997
                },
                "geometry": {
                  "type": "LineString",
                  "coordinates": [
                    [
                      -78.60796846310403,
                      -1.221758392
                    ],
                    [
                      -78.59590215860166,
                      -1.225119429
                    ],
                    [
                      -78.58046022972957,
                      -1.2548432764837258
                    ],
                    [
                      -78.61209363154917,
                      -1.279294345
                    ],
                    [
                      -78.61234654232817,
                      -1.283089822
                    ],
                    [
                      -78.61869750072543,
                      -1.278292221
                    ],
                    [
                      -78.62693152097586,
                      -1.259863295
                    ],
                    [
                      -78.64116294,
                      -1.231845098576045
                    ],
                    [
                      -78.65892133465775,
                      -1.2310977267718215
                    ],
                    [
                      -78.62296365547924,
                      -1.244904661
                    ],
                    [
                      -78.60796846310403,
                      -1.221758392
                    ],
                    [
                      -78.60796846310403,
                      -1.221758392
                    ]
                  ]
                }
              }
            ]
          }
    },
    {
        id: '2',
        nombre: 'Ruta Costa',
        geojson: {
            "type": "FeatureCollection",
            "bbox": [
                -78.658448,
                -1.283122,
                -78.580465,
                -1.216028
            ],
            "features": [
                {
                    "bbox": [
                        -78.658448,
                        -1.283122,
                        -78.580465,
                        -1.216028
                    ],
                    "type": "Feature",
                    "properties": {
                        "segments": [
                            {
                                "distance": 0.0,
                                "duration": 0.0,
                                "steps": [
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 11,
                                        "instruction": "Head east",
                                        "name": "-",
                                        "way_points": [
                                            0,
                                            0
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 11.7,
                                "duration": 1.8,
                                "steps": [
                                    {
                                        "distance": 8.3,
                                        "duration": 1.0,
                                        "type": 11,
                                        "instruction": "Head south on Aurelio Sampertegui",
                                        "name": "Aurelio Sampertegui",
                                        "way_points": [
                                            0,
                                            1
                                        ]
                                    },
                                    {
                                        "distance": 3.4,
                                        "duration": 0.8,
                                        "type": 0,
                                        "instruction": "Turn left onto Cristobal Ojeda D\u00e1vila",
                                        "name": "Cristobal Ojeda D\u00e1vila",
                                        "way_points": [
                                            1,
                                            2
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at Cristobal Ojeda D\u00e1vila, on the left",
                                        "name": "-",
                                        "way_points": [
                                            2,
                                            2
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 669.9,
                                "duration": 86.5,
                                "steps": [
                                    {
                                        "distance": 3.4,
                                        "duration": 0.8,
                                        "type": 11,
                                        "instruction": "Head west on Cristobal Ojeda D\u00e1vila",
                                        "name": "Cristobal Ojeda D\u00e1vila",
                                        "way_points": [
                                            2,
                                            3
                                        ]
                                    },
                                    {
                                        "distance": 412.1,
                                        "duration": 49.5,
                                        "type": 1,
                                        "instruction": "Turn right onto Aurelio Sampertegui",
                                        "name": "Aurelio Sampertegui",
                                        "way_points": [
                                            3,
                                            6
                                        ]
                                    },
                                    {
                                        "distance": 147.5,
                                        "duration": 10.6,
                                        "type": 3,
                                        "instruction": "Turn sharp right onto Amable Ortiz",
                                        "name": "Amable Ortiz",
                                        "way_points": [
                                            6,
                                            7
                                        ]
                                    },
                                    {
                                        "distance": 106.9,
                                        "duration": 25.6,
                                        "type": 2,
                                        "instruction": "Turn sharp left",
                                        "name": "-",
                                        "way_points": [
                                            7,
                                            9
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at your destination, on the left",
                                        "name": "-",
                                        "way_points": [
                                            9,
                                            9
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 1588.0,
                                "duration": 168.7,
                                "steps": [
                                    {
                                        "distance": 106.9,
                                        "duration": 25.6,
                                        "type": 11,
                                        "instruction": "Head south",
                                        "name": "-",
                                        "way_points": [
                                            9,
                                            11
                                        ]
                                    },
                                    {
                                        "distance": 928.5,
                                        "duration": 67.5,
                                        "type": 3,
                                        "instruction": "Turn sharp right onto Amable Ortiz",
                                        "name": "Amable Ortiz",
                                        "way_points": [
                                            11,
                                            27
                                        ]
                                    },
                                    {
                                        "distance": 480.0,
                                        "duration": 64.0,
                                        "type": 2,
                                        "instruction": "Turn sharp left onto Avenida Luis Alberto Valencia",
                                        "name": "Avenida Luis Alberto Valencia",
                                        "way_points": [
                                            27,
                                            32
                                        ]
                                    },
                                    {
                                        "distance": 24.1,
                                        "duration": 5.8,
                                        "type": 0,
                                        "instruction": "Turn left onto Julio C\u00e9sar Ca\u00f1ar",
                                        "name": "Julio C\u00e9sar Ca\u00f1ar",
                                        "way_points": [
                                            32,
                                            33
                                        ]
                                    },
                                    {
                                        "distance": 48.6,
                                        "duration": 5.8,
                                        "type": 2,
                                        "instruction": "Turn sharp left onto Avenida Luis Alberto Valencia",
                                        "name": "Avenida Luis Alberto Valencia",
                                        "way_points": [
                                            33,
                                            35
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at Avenida Luis Alberto Valencia, on the right",
                                        "name": "-",
                                        "way_points": [
                                            35,
                                            35
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 2769.0,
                                "duration": 306.0,
                                "steps": [
                                    {
                                        "distance": 436.9,
                                        "duration": 52.4,
                                        "type": 11,
                                        "instruction": "Head north on Avenida Luis Alberto Valencia",
                                        "name": "Avenida Luis Alberto Valencia",
                                        "way_points": [
                                            35,
                                            39
                                        ]
                                    },
                                    {
                                        "distance": 75.8,
                                        "duration": 10.3,
                                        "type": 0,
                                        "instruction": "Turn left onto Amable Ortiz",
                                        "name": "Amable Ortiz",
                                        "way_points": [
                                            39,
                                            44
                                        ]
                                    },
                                    {
                                        "distance": 25.5,
                                        "duration": 7.4,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 2nd exit onto Avenida Julio Jaramillo",
                                        "name": "Avenida Julio Jaramillo",
                                        "exit_number": 2,
                                        "way_points": [
                                            44,
                                            47
                                        ]
                                    },
                                    {
                                        "distance": 710.7,
                                        "duration": 64.5,
                                        "type": 12,
                                        "instruction": "Keep left onto Avenida los Atis",
                                        "name": "Avenida los Atis",
                                        "way_points": [
                                            47,
                                            59
                                        ]
                                    },
                                    {
                                        "distance": 546.3,
                                        "duration": 47.3,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 2nd exit onto Avenida los Atis",
                                        "name": "Avenida los Atis",
                                        "exit_number": 2,
                                        "way_points": [
                                            59,
                                            69
                                        ]
                                    },
                                    {
                                        "distance": 434.3,
                                        "duration": 36.8,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 2nd exit onto Avenida los Atis",
                                        "name": "Avenida los Atis",
                                        "exit_number": 2,
                                        "way_points": [
                                            69,
                                            85
                                        ]
                                    },
                                    {
                                        "distance": 309.9,
                                        "duration": 32.2,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 2nd exit onto Avenida Le\u00f3nidas Plaza Guti\u00e9rrez",
                                        "name": "Avenida Le\u00f3nidas Plaza Guti\u00e9rrez",
                                        "exit_number": 2,
                                        "way_points": [
                                            85,
                                            94
                                        ]
                                    },
                                    {
                                        "distance": 58.7,
                                        "duration": 14.1,
                                        "type": 1,
                                        "instruction": "Turn right onto Manuel de Ascazubi",
                                        "name": "Manuel de Ascazubi",
                                        "way_points": [
                                            94,
                                            95
                                        ]
                                    },
                                    {
                                        "distance": 26.4,
                                        "duration": 6.3,
                                        "type": 0,
                                        "instruction": "Turn left onto Baquerizo Moreno",
                                        "name": "Baquerizo Moreno",
                                        "way_points": [
                                            95,
                                            96
                                        ]
                                    },
                                    {
                                        "distance": 94.3,
                                        "duration": 22.6,
                                        "type": 1,
                                        "instruction": "Turn right onto Francisco Robles",
                                        "name": "Francisco Robles",
                                        "way_points": [
                                            96,
                                            97
                                        ]
                                    },
                                    {
                                        "distance": 50.2,
                                        "duration": 12.0,
                                        "type": 1,
                                        "instruction": "Turn right onto Placido Camama\u00f1o",
                                        "name": "Placido Camama\u00f1o",
                                        "way_points": [
                                            97,
                                            99
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at Placido Camama\u00f1o, on the right",
                                        "name": "-",
                                        "way_points": [
                                            99,
                                            99
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 2398.5,
                                "duration": 290.8,
                                "steps": [
                                    {
                                        "distance": 88.4,
                                        "duration": 21.2,
                                        "type": 11,
                                        "instruction": "Head east on Placido Camama\u00f1o",
                                        "name": "Placido Camama\u00f1o",
                                        "way_points": [
                                            99,
                                            100
                                        ]
                                    },
                                    {
                                        "distance": 22.1,
                                        "duration": 5.3,
                                        "type": 1,
                                        "instruction": "Turn right onto Camilo Ponce",
                                        "name": "Camilo Ponce",
                                        "way_points": [
                                            100,
                                            101
                                        ]
                                    },
                                    {
                                        "distance": 97.2,
                                        "duration": 23.3,
                                        "type": 0,
                                        "instruction": "Turn left onto Galo Plaza",
                                        "name": "Galo Plaza",
                                        "way_points": [
                                            101,
                                            103
                                        ]
                                    },
                                    {
                                        "distance": 72.3,
                                        "duration": 17.4,
                                        "type": 0,
                                        "instruction": "Turn left onto Isidro Ayora",
                                        "name": "Isidro Ayora",
                                        "way_points": [
                                            103,
                                            105
                                        ]
                                    },
                                    {
                                        "distance": 137.4,
                                        "duration": 33.0,
                                        "type": 1,
                                        "instruction": "Turn right onto Poveda Burbano (J. Maria Urbina)",
                                        "name": "Poveda Burbano (J. Maria Urbina)",
                                        "way_points": [
                                            105,
                                            107
                                        ]
                                    },
                                    {
                                        "distance": 63.2,
                                        "duration": 4.6,
                                        "type": 0,
                                        "instruction": "Turn left onto Avenida los Chasquis",
                                        "name": "Avenida los Chasquis",
                                        "way_points": [
                                            107,
                                            109
                                        ]
                                    },
                                    {
                                        "distance": 1348.6,
                                        "duration": 104.2,
                                        "type": 6,
                                        "instruction": "Continue straight onto Avenida Pichincha",
                                        "name": "Avenida Pichincha",
                                        "way_points": [
                                            109,
                                            136
                                        ]
                                    },
                                    {
                                        "distance": 569.3,
                                        "duration": 81.9,
                                        "type": 1,
                                        "instruction": "Turn right onto Avenida Quis Quis",
                                        "name": "Avenida Quis Quis",
                                        "way_points": [
                                            136,
                                            151
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at Avenida Quis Quis, on the right",
                                        "name": "-",
                                        "way_points": [
                                            151,
                                            151
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 6661.2,
                                "duration": 646.9,
                                "steps": [
                                    {
                                        "distance": 81.8,
                                        "duration": 7.4,
                                        "type": 11,
                                        "instruction": "Head southeast on Avenida Bolivariana",
                                        "name": "Avenida Bolivariana",
                                        "way_points": [
                                            151,
                                            152
                                        ]
                                    },
                                    {
                                        "distance": 729.8,
                                        "duration": 87.5,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 4th exit onto Eugenio Espejo",
                                        "name": "Eugenio Espejo",
                                        "exit_number": 4,
                                        "way_points": [
                                            152,
                                            176
                                        ]
                                    },
                                    {
                                        "distance": 637.4,
                                        "duration": 57.4,
                                        "type": 1,
                                        "instruction": "Turn right onto Avenida Cevallos",
                                        "name": "Avenida Cevallos",
                                        "way_points": [
                                            176,
                                            184
                                        ]
                                    },
                                    {
                                        "distance": 146.9,
                                        "duration": 17.6,
                                        "type": 0,
                                        "instruction": "Turn left onto Avenida Unidad Nacional",
                                        "name": "Avenida Unidad Nacional",
                                        "way_points": [
                                            184,
                                            187
                                        ]
                                    },
                                    {
                                        "distance": 487.0,
                                        "duration": 63.2,
                                        "type": 1,
                                        "instruction": "Turn right onto Avenida Unidad Nacional",
                                        "name": "Avenida Unidad Nacional",
                                        "way_points": [
                                            187,
                                            200
                                        ]
                                    },
                                    {
                                        "distance": 1165.1,
                                        "duration": 100.3,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 1st exit onto Juli\u00e1n Cordova",
                                        "name": "Juli\u00e1n Cordova",
                                        "exit_number": 1,
                                        "way_points": [
                                            200,
                                            236
                                        ]
                                    },
                                    {
                                        "distance": 2033.0,
                                        "duration": 166.2,
                                        "type": 1,
                                        "instruction": "Turn right onto Avenida Rodrigo Pachano",
                                        "name": "Avenida Rodrigo Pachano",
                                        "way_points": [
                                            236,
                                            278
                                        ]
                                    },
                                    {
                                        "distance": 790.4,
                                        "duration": 76.1,
                                        "type": 13,
                                        "instruction": "Keep right onto Avenida Arquitecto Pedro V\u00e1sconez Sevilla",
                                        "name": "Avenida Arquitecto Pedro V\u00e1sconez Sevilla",
                                        "way_points": [
                                            278,
                                            283
                                        ]
                                    },
                                    {
                                        "distance": 448.1,
                                        "duration": 37.3,
                                        "type": 6,
                                        "instruction": "Continue straight onto Avenida Arquitecto Pedro V\u00e1sconez Sevilla",
                                        "name": "Avenida Arquitecto Pedro V\u00e1sconez Sevilla",
                                        "way_points": [
                                            283,
                                            286
                                        ]
                                    },
                                    {
                                        "distance": 141.8,
                                        "duration": 34.0,
                                        "type": 3,
                                        "instruction": "Turn sharp right onto San Pedro de Macoris",
                                        "name": "San Pedro de Macoris",
                                        "way_points": [
                                            286,
                                            288
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at San Pedro de Macoris, on the right",
                                        "name": "-",
                                        "way_points": [
                                            288,
                                            288
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 1583.5,
                                "duration": 314.1,
                                "steps": [
                                    {
                                        "distance": 487.6,
                                        "duration": 74.0,
                                        "type": 11,
                                        "instruction": "Head southwest on San Pedro de Macoris",
                                        "name": "San Pedro de Macoris",
                                        "way_points": [
                                            288,
                                            295
                                        ]
                                    },
                                    {
                                        "distance": 8.0,
                                        "duration": 0.7,
                                        "type": 1,
                                        "instruction": "Turn right onto Avenida Arquitecto Pedro V\u00e1sconez Sevilla",
                                        "name": "Avenida Arquitecto Pedro V\u00e1sconez Sevilla",
                                        "way_points": [
                                            295,
                                            296
                                        ]
                                    },
                                    {
                                        "distance": 144.6,
                                        "duration": 13.0,
                                        "type": 2,
                                        "instruction": "Turn sharp left onto Avenida Rodrigo Pachano",
                                        "name": "Avenida Rodrigo Pachano",
                                        "way_points": [
                                            296,
                                            299
                                        ]
                                    },
                                    {
                                        "distance": 943.1,
                                        "duration": 226.3,
                                        "type": 1,
                                        "instruction": "Turn right onto 22 de Enero",
                                        "name": "22 de Enero",
                                        "way_points": [
                                            299,
                                            320
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at 22 de Enero, on the left",
                                        "name": "-",
                                        "way_points": [
                                            320,
                                            320
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 6318.2,
                                "duration": 620.6,
                                "steps": [
                                    {
                                        "distance": 148.9,
                                        "duration": 35.7,
                                        "type": 11,
                                        "instruction": "Head northwest on 22 de Enero",
                                        "name": "22 de Enero",
                                        "way_points": [
                                            320,
                                            323
                                        ]
                                    },
                                    {
                                        "distance": 425.9,
                                        "duration": 51.1,
                                        "type": 1,
                                        "instruction": "Turn right onto Destacamento Base Sur",
                                        "name": "Destacamento Base Sur",
                                        "way_points": [
                                            323,
                                            334
                                        ]
                                    },
                                    {
                                        "distance": 553.3,
                                        "duration": 54.3,
                                        "type": 0,
                                        "instruction": "Turn left onto Destacamento Twinza",
                                        "name": "Destacamento Twinza",
                                        "way_points": [
                                            334,
                                            339
                                        ]
                                    },
                                    {
                                        "distance": 1828.8,
                                        "duration": 158.8,
                                        "type": 6,
                                        "instruction": "Continue straight onto Calle Destacamento Twinza",
                                        "name": "Calle Destacamento Twinza",
                                        "way_points": [
                                            339,
                                            387
                                        ]
                                    },
                                    {
                                        "distance": 172.1,
                                        "duration": 13.8,
                                        "type": 1,
                                        "instruction": "Turn right onto Avenida Rodrigo Pachano",
                                        "name": "Avenida Rodrigo Pachano",
                                        "way_points": [
                                            387,
                                            388
                                        ]
                                    },
                                    {
                                        "distance": 1138.9,
                                        "duration": 91.1,
                                        "type": 1,
                                        "instruction": "Turn right onto La Heroina",
                                        "name": "La Heroina",
                                        "way_points": [
                                            388,
                                            411
                                        ]
                                    },
                                    {
                                        "distance": 695.9,
                                        "duration": 55.7,
                                        "type": 12,
                                        "instruction": "Keep left",
                                        "name": "-",
                                        "way_points": [
                                            411,
                                            426
                                        ]
                                    },
                                    {
                                        "distance": 1091.4,
                                        "duration": 97.0,
                                        "type": 4,
                                        "instruction": "Turn slight left onto La Democracia",
                                        "name": "La Democracia",
                                        "way_points": [
                                            426,
                                            471
                                        ]
                                    },
                                    {
                                        "distance": 150.7,
                                        "duration": 36.2,
                                        "type": 1,
                                        "instruction": "Turn right onto El Precursor",
                                        "name": "El Precursor",
                                        "way_points": [
                                            471,
                                            473
                                        ]
                                    },
                                    {
                                        "distance": 112.4,
                                        "duration": 27.0,
                                        "type": 0,
                                        "instruction": "Turn left onto La Nacion",
                                        "name": "La Nacion",
                                        "way_points": [
                                            473,
                                            475
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at La Nacion, on the left",
                                        "name": "-",
                                        "way_points": [
                                            475,
                                            475
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 5064.2,
                                "duration": 896.1,
                                "steps": [
                                    {
                                        "distance": 81.6,
                                        "duration": 19.6,
                                        "type": 11,
                                        "instruction": "Head southwest on La Nacion",
                                        "name": "La Nacion",
                                        "way_points": [
                                            475,
                                            477
                                        ]
                                    },
                                    {
                                        "distance": 185.8,
                                        "duration": 14.9,
                                        "type": 1,
                                        "instruction": "Turn right onto Maugeri",
                                        "name": "Maugeri",
                                        "way_points": [
                                            477,
                                            479
                                        ]
                                    },
                                    {
                                        "distance": 87.1,
                                        "duration": 12.5,
                                        "type": 1,
                                        "instruction": "Turn right onto Calle El Milanesio",
                                        "name": "Calle El Milanesio",
                                        "way_points": [
                                            479,
                                            480
                                        ]
                                    },
                                    {
                                        "distance": 312.9,
                                        "duration": 28.2,
                                        "type": 0,
                                        "instruction": "Turn left onto Nieto Polo de Aguila",
                                        "name": "Nieto Polo de Aguila",
                                        "way_points": [
                                            480,
                                            488
                                        ]
                                    },
                                    {
                                        "distance": 99.6,
                                        "duration": 23.9,
                                        "type": 2,
                                        "instruction": "Turn sharp left onto El Alcance",
                                        "name": "El Alcance",
                                        "way_points": [
                                            488,
                                            490
                                        ]
                                    },
                                    {
                                        "distance": 12.0,
                                        "duration": 2.9,
                                        "type": 1,
                                        "instruction": "Turn right onto Maugeri",
                                        "name": "Maugeri",
                                        "way_points": [
                                            490,
                                            491
                                        ]
                                    },
                                    {
                                        "distance": 153.4,
                                        "duration": 36.8,
                                        "type": 13,
                                        "instruction": "Keep right onto Maugeri",
                                        "name": "Maugeri",
                                        "way_points": [
                                            491,
                                            493
                                        ]
                                    },
                                    {
                                        "distance": 241.3,
                                        "duration": 57.9,
                                        "type": 1,
                                        "instruction": "Turn right",
                                        "name": "-",
                                        "way_points": [
                                            493,
                                            502
                                        ]
                                    },
                                    {
                                        "distance": 360.8,
                                        "duration": 86.6,
                                        "type": 0,
                                        "instruction": "Turn left",
                                        "name": "-",
                                        "way_points": [
                                            502,
                                            519
                                        ]
                                    },
                                    {
                                        "distance": 54.6,
                                        "duration": 13.1,
                                        "type": 2,
                                        "instruction": "Turn sharp left",
                                        "name": "-",
                                        "way_points": [
                                            519,
                                            520
                                        ]
                                    },
                                    {
                                        "distance": 626.0,
                                        "duration": 75.1,
                                        "type": 1,
                                        "instruction": "Turn right",
                                        "name": "-",
                                        "way_points": [
                                            520,
                                            543
                                        ]
                                    },
                                    {
                                        "distance": 924.5,
                                        "duration": 110.9,
                                        "type": 0,
                                        "instruction": "Turn left",
                                        "name": "-",
                                        "way_points": [
                                            543,
                                            572
                                        ]
                                    },
                                    {
                                        "distance": 401.6,
                                        "duration": 48.2,
                                        "type": 4,
                                        "instruction": "Turn slight left",
                                        "name": "-",
                                        "way_points": [
                                            572,
                                            582
                                        ]
                                    },
                                    {
                                        "distance": 621.0,
                                        "duration": 149.0,
                                        "type": 5,
                                        "instruction": "Turn slight right",
                                        "name": "-",
                                        "way_points": [
                                            582,
                                            601
                                        ]
                                    },
                                    {
                                        "distance": 516.6,
                                        "duration": 124.0,
                                        "type": 6,
                                        "instruction": "Continue straight",
                                        "name": "-",
                                        "way_points": [
                                            601,
                                            615
                                        ]
                                    },
                                    {
                                        "distance": 45.7,
                                        "duration": 11.0,
                                        "type": 3,
                                        "instruction": "Turn sharp right",
                                        "name": "-",
                                        "way_points": [
                                            615,
                                            616
                                        ]
                                    },
                                    {
                                        "distance": 156.6,
                                        "duration": 37.6,
                                        "type": 2,
                                        "instruction": "Turn sharp left",
                                        "name": "-",
                                        "way_points": [
                                            616,
                                            623
                                        ]
                                    },
                                    {
                                        "distance": 183.2,
                                        "duration": 44.0,
                                        "type": 0,
                                        "instruction": "Turn left",
                                        "name": "-",
                                        "way_points": [
                                            623,
                                            627
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at your destination, on the left",
                                        "name": "-",
                                        "way_points": [
                                            627,
                                            627
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 15867.6,
                                "duration": 1906.9,
                                "steps": [
                                    {
                                        "distance": 183.2,
                                        "duration": 44.0,
                                        "type": 11,
                                        "instruction": "Head northeast",
                                        "name": "-",
                                        "way_points": [
                                            627,
                                            631
                                        ]
                                    },
                                    {
                                        "distance": 156.6,
                                        "duration": 37.6,
                                        "type": 1,
                                        "instruction": "Turn right",
                                        "name": "-",
                                        "way_points": [
                                            631,
                                            638
                                        ]
                                    },
                                    {
                                        "distance": 45.7,
                                        "duration": 11.0,
                                        "type": 3,
                                        "instruction": "Turn sharp right",
                                        "name": "-",
                                        "way_points": [
                                            638,
                                            639
                                        ]
                                    },
                                    {
                                        "distance": 516.6,
                                        "duration": 124.0,
                                        "type": 2,
                                        "instruction": "Turn sharp left",
                                        "name": "-",
                                        "way_points": [
                                            639,
                                            653
                                        ]
                                    },
                                    {
                                        "distance": 621.0,
                                        "duration": 149.0,
                                        "type": 6,
                                        "instruction": "Continue straight",
                                        "name": "-",
                                        "way_points": [
                                            653,
                                            672
                                        ]
                                    },
                                    {
                                        "distance": 401.6,
                                        "duration": 48.2,
                                        "type": 4,
                                        "instruction": "Turn slight left",
                                        "name": "-",
                                        "way_points": [
                                            672,
                                            682
                                        ]
                                    },
                                    {
                                        "distance": 924.5,
                                        "duration": 110.9,
                                        "type": 13,
                                        "instruction": "Keep right",
                                        "name": "-",
                                        "way_points": [
                                            682,
                                            711
                                        ]
                                    },
                                    {
                                        "distance": 626.0,
                                        "duration": 75.1,
                                        "type": 1,
                                        "instruction": "Turn right",
                                        "name": "-",
                                        "way_points": [
                                            711,
                                            734
                                        ]
                                    },
                                    {
                                        "distance": 54.6,
                                        "duration": 13.1,
                                        "type": 0,
                                        "instruction": "Turn left",
                                        "name": "-",
                                        "way_points": [
                                            734,
                                            735
                                        ]
                                    },
                                    {
                                        "distance": 360.8,
                                        "duration": 86.6,
                                        "type": 3,
                                        "instruction": "Turn sharp right",
                                        "name": "-",
                                        "way_points": [
                                            735,
                                            752
                                        ]
                                    },
                                    {
                                        "distance": 241.3,
                                        "duration": 57.9,
                                        "type": 1,
                                        "instruction": "Turn right",
                                        "name": "-",
                                        "way_points": [
                                            752,
                                            761
                                        ]
                                    },
                                    {
                                        "distance": 165.4,
                                        "duration": 39.7,
                                        "type": 0,
                                        "instruction": "Turn left onto Maugeri",
                                        "name": "Maugeri",
                                        "way_points": [
                                            761,
                                            764
                                        ]
                                    },
                                    {
                                        "distance": 99.6,
                                        "duration": 23.9,
                                        "type": 0,
                                        "instruction": "Turn left onto El Alcance",
                                        "name": "El Alcance",
                                        "way_points": [
                                            764,
                                            766
                                        ]
                                    },
                                    {
                                        "distance": 2034.0,
                                        "duration": 179.4,
                                        "type": 3,
                                        "instruction": "Turn sharp right onto Nieto Polo de Aguila",
                                        "name": "Nieto Polo de Aguila",
                                        "way_points": [
                                            766,
                                            821
                                        ]
                                    },
                                    {
                                        "distance": 169.9,
                                        "duration": 15.3,
                                        "type": 2,
                                        "instruction": "Turn sharp left onto Avenida Los Guaytambos",
                                        "name": "Avenida Los Guaytambos",
                                        "way_points": [
                                            821,
                                            822
                                        ]
                                    },
                                    {
                                        "distance": 402.6,
                                        "duration": 61.2,
                                        "type": 1,
                                        "instruction": "Turn right onto Juan Montalvo",
                                        "name": "Juan Montalvo",
                                        "way_points": [
                                            822,
                                            833
                                        ]
                                    },
                                    {
                                        "distance": 452.3,
                                        "duration": 29.6,
                                        "type": 1,
                                        "instruction": "Turn right onto Perez De Anda",
                                        "name": "Perez De Anda",
                                        "way_points": [
                                            833,
                                            840
                                        ]
                                    },
                                    {
                                        "distance": 156.5,
                                        "duration": 26.4,
                                        "type": 0,
                                        "instruction": "Turn left onto Francisco Flor",
                                        "name": "Francisco Flor",
                                        "way_points": [
                                            840,
                                            846
                                        ]
                                    },
                                    {
                                        "distance": 185.2,
                                        "duration": 28.6,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 2nd exit onto Francisco Flor",
                                        "name": "Francisco Flor",
                                        "exit_number": 2,
                                        "way_points": [
                                            846,
                                            857
                                        ]
                                    },
                                    {
                                        "distance": 493.0,
                                        "duration": 44.4,
                                        "type": 0,
                                        "instruction": "Turn left onto Avenida Cevallos",
                                        "name": "Avenida Cevallos",
                                        "way_points": [
                                            857,
                                            864
                                        ]
                                    },
                                    {
                                        "distance": 100.1,
                                        "duration": 18.0,
                                        "type": 1,
                                        "instruction": "Turn right onto Juan Le\u00f3n Mera",
                                        "name": "Juan Le\u00f3n Mera",
                                        "way_points": [
                                            864,
                                            866
                                        ]
                                    },
                                    {
                                        "distance": 457.7,
                                        "duration": 45.0,
                                        "type": 12,
                                        "instruction": "Keep left onto Puente Juan Le\u00f3n Mera",
                                        "name": "Puente Juan Le\u00f3n Mera",
                                        "way_points": [
                                            866,
                                            884
                                        ]
                                    },
                                    {
                                        "distance": 87.9,
                                        "duration": 12.7,
                                        "type": 12,
                                        "instruction": "Keep left onto Urdaneta",
                                        "name": "Urdaneta",
                                        "way_points": [
                                            884,
                                            892
                                        ]
                                    },
                                    {
                                        "distance": 265.5,
                                        "duration": 31.4,
                                        "type": 0,
                                        "instruction": "Turn left onto Avenida Bellavista",
                                        "name": "Avenida Bellavista",
                                        "way_points": [
                                            892,
                                            900
                                        ]
                                    },
                                    {
                                        "distance": 1507.5,
                                        "duration": 139.1,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 2nd exit onto Avenida Bolivariana",
                                        "name": "Avenida Bolivariana",
                                        "exit_number": 2,
                                        "way_points": [
                                            900,
                                            921
                                        ]
                                    },
                                    {
                                        "distance": 198.4,
                                        "duration": 24.8,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 1st exit onto Avenida Bolivariana",
                                        "name": "Avenida Bolivariana",
                                        "exit_number": 1,
                                        "way_points": [
                                            921,
                                            929
                                        ]
                                    },
                                    {
                                        "distance": 1213.4,
                                        "duration": 139.6,
                                        "type": 0,
                                        "instruction": "Turn left onto Avenida Galo Vela",
                                        "name": "Avenida Galo Vela",
                                        "way_points": [
                                            929,
                                            958
                                        ]
                                    },
                                    {
                                        "distance": 275.3,
                                        "duration": 22.0,
                                        "type": 0,
                                        "instruction": "Turn left onto Benjamin Franklin",
                                        "name": "Benjamin Franklin",
                                        "way_points": [
                                            958,
                                            965
                                        ]
                                    },
                                    {
                                        "distance": 3222.7,
                                        "duration": 242.1,
                                        "type": 12,
                                        "instruction": "Keep left onto Avenida Albert Einstein",
                                        "name": "Avenida Albert Einstein",
                                        "way_points": [
                                            965,
                                            1041
                                        ]
                                    },
                                    {
                                        "distance": 112.2,
                                        "duration": 10.1,
                                        "type": 13,
                                        "instruction": "Keep right onto Julio Verne",
                                        "name": "Julio Verne",
                                        "way_points": [
                                            1041,
                                            1045
                                        ]
                                    },
                                    {
                                        "distance": 136.7,
                                        "duration": 16.4,
                                        "type": 0,
                                        "instruction": "Turn left onto Amadeus Mozzart",
                                        "name": "Amadeus Mozzart",
                                        "way_points": [
                                            1045,
                                            1046
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at Amadeus Mozzart, on the right",
                                        "name": "-",
                                        "way_points": [
                                            1046,
                                            1046
                                        ]
                                    }
                                ]
                            },
                            {
                                "distance": 6847.9,
                                "duration": 650.5,
                                "steps": [
                                    {
                                        "distance": 136.7,
                                        "duration": 16.4,
                                        "type": 11,
                                        "instruction": "Head west on Amadeus Mozzart",
                                        "name": "Amadeus Mozzart",
                                        "way_points": [
                                            1046,
                                            1047
                                        ]
                                    },
                                    {
                                        "distance": 3599.7,
                                        "duration": 293.1,
                                        "type": 1,
                                        "instruction": "Turn right onto Julio Verne",
                                        "name": "Julio Verne",
                                        "way_points": [
                                            1047,
                                            1132
                                        ]
                                    },
                                    {
                                        "distance": 208.5,
                                        "duration": 26.4,
                                        "type": 1,
                                        "instruction": "Turn right onto Avenida Galo Vela",
                                        "name": "Avenida Galo Vela",
                                        "way_points": [
                                            1132,
                                            1138
                                        ]
                                    },
                                    {
                                        "distance": 726.7,
                                        "duration": 80.8,
                                        "type": 0,
                                        "instruction": "Turn left onto Avenida Cordillera del C\u00f3ndor",
                                        "name": "Avenida Cordillera del C\u00f3ndor",
                                        "way_points": [
                                            1138,
                                            1152
                                        ]
                                    },
                                    {
                                        "distance": 427.7,
                                        "duration": 52.9,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 3rd exit onto Avenida Bolivariana",
                                        "name": "Avenida Bolivariana",
                                        "exit_number": 3,
                                        "way_points": [
                                            1152,
                                            1173
                                        ]
                                    },
                                    {
                                        "distance": 760.5,
                                        "duration": 69.3,
                                        "type": 7,
                                        "instruction": "Enter the roundabout and take the 2nd exit onto Avenida Bolivariana",
                                        "name": "Avenida Bolivariana",
                                        "exit_number": 2,
                                        "way_points": [
                                            1173,
                                            1189
                                        ]
                                    },
                                    {
                                        "distance": 439.8,
                                        "duration": 52.8,
                                        "type": 1,
                                        "instruction": "Turn right onto Pedro Echeverr\u00eda",
                                        "name": "Pedro Echeverr\u00eda",
                                        "way_points": [
                                            1189,
                                            1193
                                        ]
                                    },
                                    {
                                        "distance": 144.5,
                                        "duration": 10.4,
                                        "type": 2,
                                        "instruction": "Turn sharp left onto Amable Ortiz",
                                        "name": "Amable Ortiz",
                                        "way_points": [
                                            1193,
                                            1196
                                        ]
                                    },
                                    {
                                        "distance": 403.8,
                                        "duration": 48.5,
                                        "type": 13,
                                        "instruction": "Keep right onto Aurelio Sampertegui",
                                        "name": "Aurelio Sampertegui",
                                        "way_points": [
                                            1196,
                                            1199
                                        ]
                                    },
                                    {
                                        "distance": 0.0,
                                        "duration": 0.0,
                                        "type": 10,
                                        "instruction": "Arrive at Aurelio Sampertegui, on the left",
                                        "name": "-",
                                        "way_points": [
                                            1199,
                                            1199
                                        ]
                                    }
                                ]
                            }
                        ],
                        "way_points": [
                            0,
                            0,
                            2,
                            9,
                            35,
                            99,
                            151,
                            288,
                            320,
                            475,
                            627,
                            1046,
                            1199
                        ],
                        "summary": {
                            "distance": 49779.7,
                            "duration": 5888.9
                        }
                    },
                    "geometry": {
                        "coordinates": [
                            [
                                -78.612386,
                                -1.283049
                            ],
                            [
                                -78.612368,
                                -1.283122
                            ],
                            [
                                -78.612339,
                                -1.283112
                            ],
                            [
                                -78.612368,
                                -1.283122
                            ],
                            [
                                -78.612594,
                                -1.282209
                            ],
                            [
                                -78.61275,
                                -1.28113
                            ],
                            [
                                -78.61294,
                                -1.279465
                            ],
                            [
                                -78.61185,
                                -1.280222
                            ],
                            [
                                -78.61187,
                                -1.280007
                            ],
                            [
                                -78.61203,
                                -1.27928
                            ],
                            [
                                -78.61187,
                                -1.280007
                            ],
                            [
                                -78.61185,
                                -1.280222
                            ],
                            [
                                -78.61294,
                                -1.279465
                            ],
                            [
                                -78.613293,
                                -1.279173
                            ],
                            [
                                -78.613701,
                                -1.278878
                            ],
                            [
                                -78.613962,
                                -1.278663
                            ],
                            [
                                -78.614456,
                                -1.278167
                            ],
                            [
                                -78.615257,
                                -1.277355
                            ],
                            [
                                -78.61533,
                                -1.277259
                            ],
                            [
                                -78.615909,
                                -1.276688
                            ],
                            [
                                -78.616263,
                                -1.276302
                            ],
                            [
                                -78.616755,
                                -1.275726
                            ],
                            [
                                -78.617036,
                                -1.275299
                            ],
                            [
                                -78.617367,
                                -1.274807
                            ],
                            [
                                -78.617526,
                                -1.274598
                            ],
                            [
                                -78.617645,
                                -1.274504
                            ],
                            [
                                -78.617695,
                                -1.274449
                            ],
                            [
                                -78.617721,
                                -1.274378
                            ],
                            [
                                -78.617773,
                                -1.274436
                            ],
                            [
                                -78.617898,
                                -1.274867
                            ],
                            [
                                -78.618478,
                                -1.276613
                            ],
                            [
                                -78.619038,
                                -1.278334
                            ],
                            [
                                -78.619106,
                                -1.278457
                            ],
                            [
                                -78.619008,
                                -1.27865
                            ],
                            [
                                -78.618947,
                                -1.278533
                            ],
                            [
                                -78.618855,
                                -1.278242
                            ],
                            [
                                -78.618696,
                                -1.277739
                            ],
                            [
                                -78.618316,
                                -1.276576
                            ],
                            [
                                -78.61787,
                                -1.275161
                            ],
                            [
                                -78.617645,
                                -1.274504
                            ],
                            [
                                -78.617695,
                                -1.274449
                            ],
                            [
                                -78.617721,
                                -1.274378
                            ],
                            [
                                -78.617835,
                                -1.274209
                            ],
                            [
                                -78.617887,
                                -1.274071
                            ],
                            [
                                -78.617912,
                                -1.273893
                            ],
                            [
                                -78.617913,
                                -1.273878
                            ],
                            [
                                -78.61792,
                                -1.273796
                            ],
                            [
                                -78.61791,
                                -1.273664
                            ],
                            [
                                -78.61793,
                                -1.273334
                            ],
                            [
                                -78.618038,
                                -1.272433
                            ],
                            [
                                -78.618072,
                                -1.272356
                            ],
                            [
                                -78.61826,
                                -1.272202
                            ],
                            [
                                -78.619082,
                                -1.271714
                            ],
                            [
                                -78.61949,
                                -1.271515
                            ],
                            [
                                -78.620655,
                                -1.270967
                            ],
                            [
                                -78.620811,
                                -1.270896
                            ],
                            [
                                -78.621027,
                                -1.270768
                            ],
                            [
                                -78.621267,
                                -1.270555
                            ],
                            [
                                -78.621394,
                                -1.270414
                            ],
                            [
                                -78.6222,
                                -1.269528
                            ],
                            [
                                -78.622225,
                                -1.269454
                            ],
                            [
                                -78.622299,
                                -1.269407
                            ],
                            [
                                -78.622358,
                                -1.269256
                            ],
                            [
                                -78.622429,
                                -1.268994
                            ],
                            [
                                -78.62251,
                                -1.268566
                            ],
                            [
                                -78.622649,
                                -1.267636
                            ],
                            [
                                -78.622829,
                                -1.266687
                            ],
                            [
                                -78.62286,
                                -1.266464
                            ],
                            [
                                -78.622842,
                                -1.264903
                            ],
                            [
                                -78.622818,
                                -1.26472
                            ],
                            [
                                -78.622806,
                                -1.264714
                            ],
                            [
                                -78.622773,
                                -1.26469
                            ],
                            [
                                -78.622739,
                                -1.264616
                            ],
                            [
                                -78.622742,
                                -1.264575
                            ],
                            [
                                -78.622785,
                                -1.264506
                            ],
                            [
                                -78.622817,
                                -1.264488
                            ],
                            [
                                -78.622838,
                                -1.264442
                            ],
                            [
                                -78.622828,
                                -1.26411
                            ],
                            [
                                -78.622869,
                                -1.263834
                            ],
                            [
                                -78.62301,
                                -1.263371
                            ],
                            [
                                -78.623188,
                                -1.263093
                            ],
                            [
                                -78.6234,
                                -1.262819
                            ],
                            [
                                -78.623601,
                                -1.262522
                            ],
                            [
                                -78.623947,
                                -1.26206
                            ],
                            [
                                -78.62436,
                                -1.261524
                            ],
                            [
                                -78.624481,
                                -1.261396
                            ],
                            [
                                -78.624451,
                                -1.261328
                            ],
                            [
                                -78.624479,
                                -1.261258
                            ],
                            [
                                -78.624547,
                                -1.26123
                            ],
                            [
                                -78.624615,
                                -1.261258
                            ],
                            [
                                -78.624632,
                                -1.261282
                            ],
                            [
                                -78.625092,
                                -1.261236
                            ],
                            [
                                -78.625452,
                                -1.261197
                            ],
                            [
                                -78.626333,
                                -1.261109
                            ],
                            [
                                -78.627081,
                                -1.26104
                            ],
                            [
                                -78.627035,
                                -1.260514
                            ],
                            [
                                -78.627271,
                                -1.260503
                            ],
                            [
                                -78.627419,
                                -1.259669
                            ],
                            [
                                -78.627051,
                                -1.259609
                            ],
                            [
                                -78.626973,
                                -1.259597
                            ],
                            [
                                -78.626187,
                                -1.259474
                            ],
                            [
                                -78.626192,
                                -1.259673
                            ],
                            [
                                -78.625737,
                                -1.259714
                            ],
                            [
                                -78.625326,
                                -1.259782
                            ],
                            [
                                -78.625302,
                                -1.259484
                            ],
                            [
                                -78.625351,
                                -1.259136
                            ],
                            [
                                -78.62422,
                                -1.258926
                            ],
                            [
                                -78.624135,
                                -1.258915
                            ],
                            [
                                -78.624105,
                                -1.258485
                            ],
                            [
                                -78.624131,
                                -1.25835
                            ],
                            [
                                -78.62418,
                                -1.257968
                            ],
                            [
                                -78.624204,
                                -1.257811
                            ],
                            [
                                -78.624293,
                                -1.257234
                            ],
                            [
                                -78.62439,
                                -1.256682
                            ],
                            [
                                -78.624444,
                                -1.25626
                            ],
                            [
                                -78.624463,
                                -1.256131
                            ],
                            [
                                -78.624553,
                                -1.25561
                            ],
                            [
                                -78.624617,
                                -1.255156
                            ],
                            [
                                -78.624638,
                                -1.255062
                            ],
                            [
                                -78.62475,
                                -1.254243
                            ],
                            [
                                -78.624761,
                                -1.254158
                            ],
                            [
                                -78.624793,
                                -1.253799
                            ],
                            [
                                -78.624858,
                                -1.253246
                            ],
                            [
                                -78.624941,
                                -1.252554
                            ],
                            [
                                -78.624992,
                                -1.252021
                            ],
                            [
                                -78.625043,
                                -1.251502
                            ],
                            [
                                -78.625059,
                                -1.251435
                            ],
                            [
                                -78.625188,
                                -1.250931
                            ],
                            [
                                -78.6253,
                                -1.250357
                            ],
                            [
                                -78.625374,
                                -1.249955
                            ],
                            [
                                -78.625491,
                                -1.249441
                            ],
                            [
                                -78.625623,
                                -1.248931
                            ],
                            [
                                -78.625709,
                                -1.248645
                            ],
                            [
                                -78.625767,
                                -1.248435
                            ],
                            [
                                -78.625865,
                                -1.248055
                            ],
                            [
                                -78.625897,
                                -1.247941
                            ],
                            [
                                -78.626331,
                                -1.24645
                            ],
                            [
                                -78.626044,
                                -1.246266
                            ],
                            [
                                -78.625241,
                                -1.245622
                            ],
                            [
                                -78.624418,
                                -1.244919
                            ],
                            [
                                -78.624038,
                                -1.244628
                            ],
                            [
                                -78.623953,
                                -1.244529
                            ],
                            [
                                -78.623868,
                                -1.244363
                            ],
                            [
                                -78.623782,
                                -1.24416
                            ],
                            [
                                -78.623726,
                                -1.244066
                            ],
                            [
                                -78.623665,
                                -1.244003
                            ],
                            [
                                -78.623576,
                                -1.243971
                            ],
                            [
                                -78.623092,
                                -1.243987
                            ],
                            [
                                -78.623001,
                                -1.244017
                            ],
                            [
                                -78.62295,
                                -1.244045
                            ],
                            [
                                -78.622898,
                                -1.244102
                            ],
                            [
                                -78.622555,
                                -1.244648
                            ],
                            [
                                -78.622163,
                                -1.245271
                            ],
                            [
                                -78.622162,
                                -1.245288
                            ],
                            [
                                -78.622138,
                                -1.245349
                            ],
                            [
                                -78.62209,
                                -1.245393
                            ],
                            [
                                -78.622043,
                                -1.245409
                            ],
                            [
                                -78.621951,
                                -1.245393
                            ],
                            [
                                -78.621888,
                                -1.245324
                            ],
                            [
                                -78.621876,
                                -1.245278
                            ],
                            [
                                -78.621901,
                                -1.245185
                            ],
                            [
                                -78.621981,
                                -1.245128
                            ],
                            [
                                -78.622049,
                                -1.245126
                            ],
                            [
                                -78.622152,
                                -1.245082
                            ],
                            [
                                -78.622223,
                                -1.245016
                            ],
                            [
                                -78.622947,
                                -1.243946
                            ],
                            [
                                -78.623024,
                                -1.243845
                            ],
                            [
                                -78.623257,
                                -1.24363
                            ],
                            [
                                -78.623384,
                                -1.243473
                            ],
                            [
                                -78.623841,
                                -1.242811
                            ],
                            [
                                -78.624079,
                                -1.242523
                            ],
                            [
                                -78.624179,
                                -1.242388
                            ],
                            [
                                -78.624423,
                                -1.242014
                            ],
                            [
                                -78.624785,
                                -1.241619
                            ],
                            [
                                -78.625121,
                                -1.241202
                            ],
                            [
                                -78.62543,
                                -1.240776
                            ],
                            [
                                -78.625641,
                                -1.240518
                            ],
                            [
                                -78.625116,
                                -1.23999
                            ],
                            [
                                -78.624026,
                                -1.238975
                            ],
                            [
                                -78.623603,
                                -1.238564
                            ],
                            [
                                -78.623193,
                                -1.238182
                            ],
                            [
                                -78.622487,
                                -1.237564
                            ],
                            [
                                -78.621934,
                                -1.237044
                            ],
                            [
                                -78.621508,
                                -1.236693
                            ],
                            [
                                -78.621431,
                                -1.236631
                            ],
                            [
                                -78.621466,
                                -1.236562
                            ],
                            [
                                -78.621815,
                                -1.236036
                            ],
                            [
                                -78.622132,
                                -1.235512
                            ],
                            [
                                -78.622084,
                                -1.235365
                            ],
                            [
                                -78.622108,
                                -1.235219
                            ],
                            [
                                -78.622179,
                                -1.235105
                            ],
                            [
                                -78.622421,
                                -1.234892
                            ],
                            [
                                -78.622564,
                                -1.234755
                            ],
                            [
                                -78.622693,
                                -1.234528
                            ],
                            [
                                -78.623111,
                                -1.233845
                            ],
                            [
                                -78.623342,
                                -1.233394
                            ],
                            [
                                -78.623385,
                                -1.23333
                            ],
                            [
                                -78.623594,
                                -1.233003
                            ],
                            [
                                -78.623632,
                                -1.23294
                            ],
                            [
                                -78.624139,
                                -1.232133
                            ],
                            [
                                -78.624304,
                                -1.231809
                            ],
                            [
                                -78.624316,
                                -1.231738
                            ],
                            [
                                -78.624357,
                                -1.231649
                            ],
                            [
                                -78.624369,
                                -1.231476
                            ],
                            [
                                -78.624359,
                                -1.231387
                            ],
                            [
                                -78.624328,
                                -1.2313
                            ],
                            [
                                -78.624224,
                                -1.231139
                            ],
                            [
                                -78.624149,
                                -1.231065
                            ],
                            [
                                -78.62405,
                                -1.230924
                            ],
                            [
                                -78.622919,
                                -1.230251
                            ],
                            [
                                -78.622004,
                                -1.229814
                            ],
                            [
                                -78.621872,
                                -1.22973
                            ],
                            [
                                -78.621552,
                                -1.229424
                            ],
                            [
                                -78.621407,
                                -1.229333
                            ],
                            [
                                -78.621298,
                                -1.229308
                            ],
                            [
                                -78.620638,
                                -1.229295
                            ],
                            [
                                -78.620555,
                                -1.229282
                            ],
                            [
                                -78.6202,
                                -1.229068
                            ],
                            [
                                -78.619371,
                                -1.22846
                            ],
                            [
                                -78.619343,
                                -1.228421
                            ],
                            [
                                -78.61934,
                                -1.228378
                            ],
                            [
                                -78.619362,
                                -1.228321
                            ],
                            [
                                -78.619542,
                                -1.228019
                            ],
                            [
                                -78.619579,
                                -1.227873
                            ],
                            [
                                -78.619564,
                                -1.227713
                            ],
                            [
                                -78.619544,
                                -1.227647
                            ],
                            [
                                -78.619478,
                                -1.227541
                            ],
                            [
                                -78.619414,
                                -1.227475
                            ],
                            [
                                -78.619371,
                                -1.227439
                            ],
                            [
                                -78.61925,
                                -1.227385
                            ],
                            [
                                -78.619091,
                                -1.227352
                            ],
                            [
                                -78.61784,
                                -1.227182
                            ],
                            [
                                -78.617251,
                                -1.227097
                            ],
                            [
                                -78.617073,
                                -1.227076
                            ],
                            [
                                -78.616862,
                                -1.227021
                            ],
                            [
                                -78.616615,
                                -1.226893
                            ],
                            [
                                -78.616548,
                                -1.22682
                            ],
                            [
                                -78.61629,
                                -1.226813
                            ],
                            [
                                -78.616072,
                                -1.226876
                            ],
                            [
                                -78.615935,
                                -1.226945
                            ],
                            [
                                -78.61561,
                                -1.227231
                            ],
                            [
                                -78.615474,
                                -1.2273
                            ],
                            [
                                -78.613551,
                                -1.227839
                            ],
                            [
                                -78.613339,
                                -1.227867
                            ],
                            [
                                -78.613115,
                                -1.227866
                            ],
                            [
                                -78.611795,
                                -1.227914
                            ],
                            [
                                -78.611393,
                                -1.227954
                            ],
                            [
                                -78.610568,
                                -1.228071
                            ],
                            [
                                -78.610352,
                                -1.228123
                            ],
                            [
                                -78.609699,
                                -1.228384
                            ],
                            [
                                -78.608935,
                                -1.228655
                            ],
                            [
                                -78.608646,
                                -1.228813
                            ],
                            [
                                -78.608031,
                                -1.229249
                            ],
                            [
                                -78.607887,
                                -1.229316
                            ],
                            [
                                -78.607713,
                                -1.229368
                            ],
                            [
                                -78.607565,
                                -1.229386
                            ],
                            [
                                -78.60739,
                                -1.229381
                            ],
                            [
                                -78.606567,
                                -1.229098
                            ],
                            [
                                -78.605794,
                                -1.228784
                            ],
                            [
                                -78.605436,
                                -1.228638
                            ],
                            [
                                -78.605244,
                                -1.22856
                            ],
                            [
                                -78.605109,
                                -1.228505
                            ],
                            [
                                -78.604649,
                                -1.228316
                            ],
                            [
                                -78.604422,
                                -1.22822
                            ],
                            [
                                -78.60431,
                                -1.228149
                            ],
                            [
                                -78.604221,
                                -1.228046
                            ],
                            [
                                -78.603901,
                                -1.227538
                            ],
                            [
                                -78.603512,
                                -1.227172
                            ],
                            [
                                -78.603195,
                                -1.226862
                            ],
                            [
                                -78.603048,
                                -1.226784
                            ],
                            [
                                -78.602875,
                                -1.226741
                            ],
                            [
                                -78.602725,
                                -1.226721
                            ],
                            [
                                -78.601605,
                                -1.22666
                            ],
                            [
                                -78.601305,
                                -1.22662
                            ],
                            [
                                -78.601181,
                                -1.226589
                            ],
                            [
                                -78.600961,
                                -1.226483
                            ],
                            [
                                -78.600879,
                                -1.226429
                            ],
                            [
                                -78.600472,
                                -1.226218
                            ],
                            [
                                -78.599865,
                                -1.225865
                            ],
                            [
                                -78.598012,
                                -1.226174
                            ],
                            [
                                -78.597801,
                                -1.226219
                            ],
                            [
                                -78.597692,
                                -1.226237
                            ],
                            [
                                -78.597582,
                                -1.226256
                            ],
                            [
                                -78.592843,
                                -1.226969
                            ],
                            [
                                -78.592805,
                                -1.226895
                            ],
                            [
                                -78.593565,
                                -1.226793
                            ],
                            [
                                -78.596712,
                                -1.226327
                            ],
                            [
                                -78.595985,
                                -1.225783
                            ],
                            [
                                -78.595656,
                                -1.225621
                            ],
                            [
                                -78.595985,
                                -1.225783
                            ],
                            [
                                -78.596712,
                                -1.226327
                            ],
                            [
                                -78.597359,
                                -1.226229
                            ],
                            [
                                -78.597644,
                                -1.22618
                            ],
                            [
                                -78.597726,
                                -1.226164
                            ],
                            [
                                -78.597859,
                                -1.226143
                            ],
                            [
                                -78.599781,
                                -1.225816
                            ],
                            [
                                -78.599791,
                                -1.225744
                            ],
                            [
                                -78.599875,
                                -1.225788
                            ],
                            [
                                -78.600505,
                                -1.226169
                            ],
                            [
                                -78.600918,
                                -1.226392
                            ],
                            [
                                -78.601191,
                                -1.226141
                            ],
                            [
                                -78.601784,
                                -1.225593
                            ],
                            [
                                -78.602053,
                                -1.225342
                            ],
                            [
                                -78.602164,
                                -1.22524
                            ],
                            [
                                -78.60274,
                                -1.224716
                            ],
                            [
                                -78.602813,
                                -1.224651
                            ],
                            [
                                -78.60293,
                                -1.22455
                            ],
                            [
                                -78.603784,
                                -1.223898
                            ],
                            [
                                -78.604104,
                                -1.223696
                            ],
                            [
                                -78.604397,
                                -1.223513
                            ],
                            [
                                -78.604455,
                                -1.223476
                            ],
                            [
                                -78.604799,
                                -1.22326
                            ],
                            [
                                -78.605143,
                                -1.223024
                            ],
                            [
                                -78.6052,
                                -1.222987
                            ],
                            [
                                -78.605479,
                                -1.222827
                            ],
                            [
                                -78.605663,
                                -1.222708
                            ],
                            [
                                -78.605882,
                                -1.222567
                            ],
                            [
                                -78.606458,
                                -1.222203
                            ],
                            [
                                -78.606742,
                                -1.22202
                            ],
                            [
                                -78.607206,
                                -1.221713
                            ],
                            [
                                -78.607731,
                                -1.221382
                            ],
                            [
                                -78.608005,
                                -1.221209
                            ],
                            [
                                -78.608629,
                                -1.220841
                            ],
                            [
                                -78.608887,
                                -1.220708
                            ],
                            [
                                -78.608905,
                                -1.220462
                            ],
                            [
                                -78.609075,
                                -1.220134
                            ],
                            [
                                -78.609179,
                                -1.219884
                            ],
                            [
                                -78.609248,
                                -1.219605
                            ],
                            [
                                -78.609369,
                                -1.21938
                            ],
                            [
                                -78.609488,
                                -1.219217
                            ],
                            [
                                -78.609526,
                                -1.219129
                            ],
                            [
                                -78.609561,
                                -1.218552
                            ],
                            [
                                -78.609585,
                                -1.21845
                            ],
                            [
                                -78.609876,
                                -1.217825
                            ],
                            [
                                -78.610147,
                                -1.217147
                            ],
                            [
                                -78.611347,
                                -1.21774
                            ],
                            [
                                -78.611736,
                                -1.217939
                            ],
                            [
                                -78.612602,
                                -1.218341
                            ],
                            [
                                -78.614232,
                                -1.219112
                            ],
                            [
                                -78.614645,
                                -1.219274
                            ],
                            [
                                -78.6149,
                                -1.219403
                            ],
                            [
                                -78.614932,
                                -1.219469
                            ],
                            [
                                -78.614935,
                                -1.219555
                            ],
                            [
                                -78.614837,
                                -1.220094
                            ],
                            [
                                -78.615246,
                                -1.221532
                            ],
                            [
                                -78.615346,
                                -1.222132
                            ],
                            [
                                -78.615458,
                                -1.222658
                            ],
                            [
                                -78.615664,
                                -1.223639
                            ],
                            [
                                -78.615717,
                                -1.223804
                            ],
                            [
                                -78.61579,
                                -1.2239
                            ],
                            [
                                -78.615871,
                                -1.223963
                            ],
                            [
                                -78.616891,
                                -1.224567
                            ],
                            [
                                -78.617034,
                                -1.224664
                            ],
                            [
                                -78.617194,
                                -1.224828
                            ],
                            [
                                -78.617405,
                                -1.22546
                            ],
                            [
                                -78.617456,
                                -1.225561
                            ],
                            [
                                -78.617493,
                                -1.225627
                            ],
                            [
                                -78.61755,
                                -1.225688
                            ],
                            [
                                -78.617617,
                                -1.22573
                            ],
                            [
                                -78.617727,
                                -1.225771
                            ],
                            [
                                -78.617912,
                                -1.22578
                            ],
                            [
                                -78.618393,
                                -1.225783
                            ],
                            [
                                -78.618898,
                                -1.225868
                            ],
                            [
                                -78.619135,
                                -1.225879
                            ],
                            [
                                -78.619308,
                                -1.225837
                            ],
                            [
                                -78.61947,
                                -1.225751
                            ],
                            [
                                -78.619584,
                                -1.225656
                            ],
                            [
                                -78.619746,
                                -1.225466
                            ],
                            [
                                -78.619797,
                                -1.225439
                            ],
                            [
                                -78.620864,
                                -1.22527
                            ],
                            [
                                -78.621626,
                                -1.22512
                            ],
                            [
                                -78.621734,
                                -1.225151
                            ],
                            [
                                -78.621961,
                                -1.22529
                            ],
                            [
                                -78.622085,
                                -1.225337
                            ],
                            [
                                -78.622684,
                                -1.225436
                            ],
                            [
                                -78.623117,
                                -1.22553
                            ],
                            [
                                -78.623767,
                                -1.225705
                            ],
                            [
                                -78.623915,
                                -1.225777
                            ],
                            [
                                -78.624019,
                                -1.225884
                            ],
                            [
                                -78.624044,
                                -1.225976
                            ],
                            [
                                -78.624044,
                                -1.226049
                            ],
                            [
                                -78.624006,
                                -1.226171
                            ],
                            [
                                -78.623965,
                                -1.226218
                            ],
                            [
                                -78.623631,
                                -1.226452
                            ],
                            [
                                -78.623288,
                                -1.226712
                            ],
                            [
                                -78.62318,
                                -1.226809
                            ],
                            [
                                -78.622898,
                                -1.227057
                            ],
                            [
                                -78.622663,
                                -1.227299
                            ],
                            [
                                -78.623956,
                                -1.228149
                            ],
                            [
                                -78.624233,
                                -1.227889
                            ],
                            [
                                -78.624509,
                                -1.22766
                            ],
                            [
                                -78.624956,
                                -1.227229
                            ],
                            [
                                -78.625044,
                                -1.227089
                            ],
                            [
                                -78.625146,
                                -1.226863
                            ],
                            [
                                -78.62523,
                                -1.226737
                            ],
                            [
                                -78.625301,
                                -1.226693
                            ],
                            [
                                -78.62545,
                                -1.226658
                            ],
                            [
                                -78.625635,
                                -1.226664
                            ],
                            [
                                -78.625998,
                                -1.226708
                            ],
                            [
                                -78.626972,
                                -1.227209
                            ],
                            [
                                -78.627274,
                                -1.227401
                            ],
                            [
                                -78.628416,
                                -1.228038
                            ],
                            [
                                -78.62895,
                                -1.228368
                            ],
                            [
                                -78.629959,
                                -1.229186
                            ],
                            [
                                -78.630104,
                                -1.229246
                            ],
                            [
                                -78.630255,
                                -1.229257
                            ],
                            [
                                -78.631138,
                                -1.228868
                            ],
                            [
                                -78.631346,
                                -1.228684
                            ],
                            [
                                -78.631465,
                                -1.228536
                            ],
                            [
                                -78.631816,
                                -1.22817
                            ],
                            [
                                -78.63206,
                                -1.227731
                            ],
                            [
                                -78.632121,
                                -1.22766
                            ],
                            [
                                -78.632283,
                                -1.227626
                            ],
                            [
                                -78.632937,
                                -1.227414
                            ],
                            [
                                -78.633554,
                                -1.227322
                            ],
                            [
                                -78.633863,
                                -1.227302
                            ],
                            [
                                -78.634036,
                                -1.22734
                            ],
                            [
                                -78.634277,
                                -1.227448
                            ],
                            [
                                -78.634624,
                                -1.227641
                            ],
                            [
                                -78.634822,
                                -1.227641
                            ],
                            [
                                -78.634973,
                                -1.227559
                            ],
                            [
                                -78.635915,
                                -1.226848
                            ],
                            [
                                -78.636498,
                                -1.226272
                            ],
                            [
                                -78.636964,
                                -1.225767
                            ],
                            [
                                -78.63732,
                                -1.225502
                            ],
                            [
                                -78.637391,
                                -1.225468
                            ],
                            [
                                -78.637446,
                                -1.225463
                            ],
                            [
                                -78.637708,
                                -1.225589
                            ],
                            [
                                -78.637774,
                                -1.225597
                            ],
                            [
                                -78.637848,
                                -1.22557
                            ],
                            [
                                -78.638044,
                                -1.225373
                            ],
                            [
                                -78.638085,
                                -1.225355
                            ],
                            [
                                -78.638147,
                                -1.225345
                            ],
                            [
                                -78.638215,
                                -1.225355
                            ],
                            [
                                -78.638266,
                                -1.225386
                            ],
                            [
                                -78.638295,
                                -1.225432
                            ],
                            [
                                -78.638296,
                                -1.22561
                            ],
                            [
                                -78.638156,
                                -1.226183
                            ],
                            [
                                -78.63821,
                                -1.226252
                            ],
                            [
                                -78.638413,
                                -1.22657
                            ],
                            [
                                -78.638419,
                                -1.226677
                            ],
                            [
                                -78.63838,
                                -1.226787
                            ],
                            [
                                -78.638185,
                                -1.226993
                            ],
                            [
                                -78.638148,
                                -1.227062
                            ],
                            [
                                -78.638106,
                                -1.227234
                            ],
                            [
                                -78.638116,
                                -1.22736
                            ],
                            [
                                -78.638244,
                                -1.22767
                            ],
                            [
                                -78.638323,
                                -1.227928
                            ],
                            [
                                -78.638391,
                                -1.228098
                            ],
                            [
                                -78.638426,
                                -1.228223
                            ],
                            [
                                -78.638432,
                                -1.228343
                            ],
                            [
                                -78.638407,
                                -1.228481
                            ],
                            [
                                -78.638267,
                                -1.228776
                            ],
                            [
                                -78.638204,
                                -1.229198
                            ],
                            [
                                -78.638122,
                                -1.229557
                            ],
                            [
                                -78.637929,
                                -1.230205
                            ],
                            [
                                -78.637931,
                                -1.23039
                            ],
                            [
                                -78.637953,
                                -1.230555
                            ],
                            [
                                -78.637943,
                                -1.230656
                            ],
                            [
                                -78.637899,
                                -1.23075
                            ],
                            [
                                -78.637684,
                                -1.2311
                            ],
                            [
                                -78.637601,
                                -1.231307
                            ],
                            [
                                -78.637598,
                                -1.231459
                            ],
                            [
                                -78.637618,
                                -1.231541
                            ],
                            [
                                -78.637654,
                                -1.231604
                            ],
                            [
                                -78.637759,
                                -1.23168
                            ],
                            [
                                -78.638212,
                                -1.231844
                            ],
                            [
                                -78.638736,
                                -1.23197
                            ],
                            [
                                -78.63895,
                                -1.23212
                            ],
                            [
                                -78.639113,
                                -1.232259
                            ],
                            [
                                -78.639251,
                                -1.232336
                            ],
                            [
                                -78.639668,
                                -1.232443
                            ],
                            [
                                -78.639829,
                                -1.2321
                            ],
                            [
                                -78.640335,
                                -1.231266
                            ],
                            [
                                -78.640957,
                                -1.231727
                            ],
                            [
                                -78.641153,
                                -1.231859
                            ],
                            [
                                -78.641418,
                                -1.232038
                            ],
                            [
                                -78.641777,
                                -1.232245
                            ],
                            [
                                -78.642162,
                                -1.231483
                            ],
                            [
                                -78.642528,
                                -1.230752
                            ],
                            [
                                -78.641818,
                                -1.230423
                            ],
                            [
                                -78.64218,
                                -1.229752
                            ],
                            [
                                -78.642275,
                                -1.229444
                            ],
                            [
                                -78.64239,
                                -1.229161
                            ],
                            [
                                -78.642572,
                                -1.228847
                            ],
                            [
                                -78.642761,
                                -1.228535
                            ],
                            [
                                -78.643064,
                                -1.228123
                            ],
                            [
                                -78.643093,
                                -1.228051
                            ],
                            [
                                -78.643103,
                                -1.227944
                            ],
                            [
                                -78.643264,
                                -1.228075
                            ],
                            [
                                -78.643657,
                                -1.22864
                            ],
                            [
                                -78.643732,
                                -1.228562
                            ],
                            [
                                -78.644332,
                                -1.227695
                            ],
                            [
                                -78.64456,
                                -1.227463
                            ],
                            [
                                -78.644546,
                                -1.227146
                            ],
                            [
                                -78.644598,
                                -1.22696
                            ],
                            [
                                -78.644599,
                                -1.226902
                            ],
                            [
                                -78.644582,
                                -1.226834
                            ],
                            [
                                -78.644382,
                                -1.226412
                            ],
                            [
                                -78.644338,
                                -1.226239
                            ],
                            [
                                -78.644165,
                                -1.22583
                            ],
                            [
                                -78.643998,
                                -1.225565
                            ],
                            [
                                -78.643951,
                                -1.225445
                            ],
                            [
                                -78.64404,
                                -1.225425
                            ],
                            [
                                -78.644134,
                                -1.225359
                            ],
                            [
                                -78.644243,
                                -1.225211
                            ],
                            [
                                -78.644279,
                                -1.225107
                            ],
                            [
                                -78.644274,
                                -1.225011
                            ],
                            [
                                -78.644195,
                                -1.224812
                            ],
                            [
                                -78.644195,
                                -1.224744
                            ],
                            [
                                -78.644286,
                                -1.22461
                            ],
                            [
                                -78.644466,
                                -1.224461
                            ],
                            [
                                -78.644513,
                                -1.224377
                            ],
                            [
                                -78.644568,
                                -1.224121
                            ],
                            [
                                -78.644608,
                                -1.223747
                            ],
                            [
                                -78.644656,
                                -1.223627
                            ],
                            [
                                -78.64486,
                                -1.223306
                            ],
                            [
                                -78.644971,
                                -1.223083
                            ],
                            [
                                -78.645141,
                                -1.22281
                            ],
                            [
                                -78.645164,
                                -1.222655
                            ],
                            [
                                -78.645611,
                                -1.22286
                            ],
                            [
                                -78.645642,
                                -1.222813
                            ],
                            [
                                -78.645706,
                                -1.222772
                            ],
                            [
                                -78.64583,
                                -1.22276
                            ],
                            [
                                -78.646183,
                                -1.22281
                            ],
                            [
                                -78.646318,
                                -1.222803
                            ],
                            [
                                -78.646447,
                                -1.222773
                            ],
                            [
                                -78.646939,
                                -1.222556
                            ],
                            [
                                -78.6474,
                                -1.222352
                            ],
                            [
                                -78.647692,
                                -1.222155
                            ],
                            [
                                -78.648108,
                                -1.221766
                            ],
                            [
                                -78.648345,
                                -1.221551
                            ],
                            [
                                -78.64841,
                                -1.221472
                            ],
                            [
                                -78.648444,
                                -1.221386
                            ],
                            [
                                -78.648418,
                                -1.221277
                            ],
                            [
                                -78.648157,
                                -1.220841
                            ],
                            [
                                -78.648068,
                                -1.220622
                            ],
                            [
                                -78.648063,
                                -1.220519
                            ],
                            [
                                -78.648109,
                                -1.220138
                            ],
                            [
                                -78.648111,
                                -1.220002
                            ],
                            [
                                -78.648091,
                                -1.219899
                            ],
                            [
                                -78.64803,
                                -1.219815
                            ],
                            [
                                -78.647799,
                                -1.21971
                            ],
                            [
                                -78.64749,
                                -1.219602
                            ],
                            [
                                -78.64746,
                                -1.219536
                            ],
                            [
                                -78.647459,
                                -1.219472
                            ],
                            [
                                -78.647483,
                                -1.219412
                            ],
                            [
                                -78.647788,
                                -1.219014
                            ],
                            [
                                -78.647836,
                                -1.218911
                            ],
                            [
                                -78.647986,
                                -1.218139
                            ],
                            [
                                -78.648198,
                                -1.217417
                            ],
                            [
                                -78.648187,
                                -1.217018
                            ],
                            [
                                -78.648219,
                                -1.216723
                            ],
                            [
                                -78.648207,
                                -1.216449
                            ],
                            [
                                -78.648242,
                                -1.216262
                            ],
                            [
                                -78.648284,
                                -1.216162
                            ],
                            [
                                -78.648352,
                                -1.216069
                            ],
                            [
                                -78.648476,
                                -1.216028
                            ],
                            [
                                -78.648565,
                                -1.216035
                            ],
                            [
                                -78.648613,
                                -1.216067
                            ],
                            [
                                -78.648694,
                                -1.216173
                            ],
                            [
                                -78.648808,
                                -1.216666
                            ],
                            [
                                -78.648828,
                                -1.216815
                            ],
                            [
                                -78.648756,
                                -1.217681
                            ],
                            [
                                -78.648791,
                                -1.217874
                            ],
                            [
                                -78.648844,
                                -1.217995
                            ],
                            [
                                -78.648924,
                                -1.218128
                            ],
                            [
                                -78.649035,
                                -1.218246
                            ],
                            [
                                -78.649475,
                                -1.218536
                            ],
                            [
                                -78.649556,
                                -1.218629
                            ],
                            [
                                -78.649919,
                                -1.219378
                            ],
                            [
                                -78.650135,
                                -1.219642
                            ],
                            [
                                -78.650264,
                                -1.219752
                            ],
                            [
                                -78.650337,
                                -1.220041
                            ],
                            [
                                -78.650516,
                                -1.220528
                            ],
                            [
                                -78.650622,
                                -1.221135
                            ],
                            [
                                -78.650612,
                                -1.221425
                            ],
                            [
                                -78.650449,
                                -1.221989
                            ],
                            [
                                -78.650423,
                                -1.222159
                            ],
                            [
                                -78.650542,
                                -1.22232
                            ],
                            [
                                -78.650646,
                                -1.22241
                            ],
                            [
                                -78.651053,
                                -1.222749
                            ],
                            [
                                -78.651273,
                                -1.22289
                            ],
                            [
                                -78.651622,
                                -1.222994
                            ],
                            [
                                -78.652357,
                                -1.222876
                            ],
                            [
                                -78.652507,
                                -1.222968
                            ],
                            [
                                -78.652722,
                                -1.222705
                            ],
                            [
                                -78.652855,
                                -1.222773
                            ],
                            [
                                -78.652788,
                                -1.223185
                            ],
                            [
                                -78.652577,
                                -1.223752
                            ],
                            [
                                -78.652605,
                                -1.223865
                            ],
                            [
                                -78.652693,
                                -1.224006
                            ],
                            [
                                -78.65282,
                                -1.224083
                            ],
                            [
                                -78.652933,
                                -1.22421
                            ],
                            [
                                -78.653155,
                                -1.224421
                            ],
                            [
                                -78.653384,
                                -1.224735
                            ],
                            [
                                -78.653423,
                                -1.224872
                            ],
                            [
                                -78.653525,
                                -1.224978
                            ],
                            [
                                -78.653753,
                                -1.225263
                            ],
                            [
                                -78.653891,
                                -1.225379
                            ],
                            [
                                -78.654035,
                                -1.225436
                            ],
                            [
                                -78.654458,
                                -1.225708
                            ],
                            [
                                -78.654629,
                                -1.225784
                            ],
                            [
                                -78.654818,
                                -1.225807
                            ],
                            [
                                -78.654901,
                                -1.225839
                            ],
                            [
                                -78.655346,
                                -1.226184
                            ],
                            [
                                -78.655468,
                                -1.226312
                            ],
                            [
                                -78.655527,
                                -1.226443
                            ],
                            [
                                -78.655648,
                                -1.227225
                            ],
                            [
                                -78.655772,
                                -1.227515
                            ],
                            [
                                -78.655947,
                                -1.227766
                            ],
                            [
                                -78.656029,
                                -1.228001
                            ],
                            [
                                -78.656094,
                                -1.228265
                            ],
                            [
                                -78.656209,
                                -1.228625
                            ],
                            [
                                -78.656392,
                                -1.229077
                            ],
                            [
                                -78.6566,
                                -1.229529
                            ],
                            [
                                -78.656871,
                                -1.229221
                            ],
                            [
                                -78.656865,
                                -1.229316
                            ],
                            [
                                -78.656775,
                                -1.229425
                            ],
                            [
                                -78.656774,
                                -1.229473
                            ],
                            [
                                -78.657079,
                                -1.229933
                            ],
                            [
                                -78.657213,
                                -1.230183
                            ],
                            [
                                -78.657261,
                                -1.230205
                            ],
                            [
                                -78.657458,
                                -1.230076
                            ],
                            [
                                -78.657511,
                                -1.230164
                            ],
                            [
                                -78.658096,
                                -1.230872
                            ],
                            [
                                -78.658402,
                                -1.231304
                            ],
                            [
                                -78.658448,
                                -1.231382
                            ],
                            [
                                -78.658402,
                                -1.231304
                            ],
                            [
                                -78.658096,
                                -1.230872
                            ],
                            [
                                -78.657511,
                                -1.230164
                            ],
                            [
                                -78.657458,
                                -1.230076
                            ],
                            [
                                -78.657261,
                                -1.230205
                            ],
                            [
                                -78.657213,
                                -1.230183
                            ],
                            [
                                -78.657079,
                                -1.229933
                            ],
                            [
                                -78.656774,
                                -1.229473
                            ],
                            [
                                -78.656775,
                                -1.229425
                            ],
                            [
                                -78.656865,
                                -1.229316
                            ],
                            [
                                -78.656871,
                                -1.229221
                            ],
                            [
                                -78.6566,
                                -1.229529
                            ],
                            [
                                -78.656392,
                                -1.229077
                            ],
                            [
                                -78.656209,
                                -1.228625
                            ],
                            [
                                -78.656094,
                                -1.228265
                            ],
                            [
                                -78.656029,
                                -1.228001
                            ],
                            [
                                -78.655947,
                                -1.227766
                            ],
                            [
                                -78.655772,
                                -1.227515
                            ],
                            [
                                -78.655648,
                                -1.227225
                            ],
                            [
                                -78.655527,
                                -1.226443
                            ],
                            [
                                -78.655468,
                                -1.226312
                            ],
                            [
                                -78.655346,
                                -1.226184
                            ],
                            [
                                -78.654901,
                                -1.225839
                            ],
                            [
                                -78.654818,
                                -1.225807
                            ],
                            [
                                -78.654629,
                                -1.225784
                            ],
                            [
                                -78.654458,
                                -1.225708
                            ],
                            [
                                -78.654035,
                                -1.225436
                            ],
                            [
                                -78.653891,
                                -1.225379
                            ],
                            [
                                -78.653753,
                                -1.225263
                            ],
                            [
                                -78.653525,
                                -1.224978
                            ],
                            [
                                -78.653423,
                                -1.224872
                            ],
                            [
                                -78.653384,
                                -1.224735
                            ],
                            [
                                -78.653155,
                                -1.224421
                            ],
                            [
                                -78.652933,
                                -1.22421
                            ],
                            [
                                -78.65282,
                                -1.224083
                            ],
                            [
                                -78.652693,
                                -1.224006
                            ],
                            [
                                -78.652605,
                                -1.223865
                            ],
                            [
                                -78.652577,
                                -1.223752
                            ],
                            [
                                -78.652788,
                                -1.223185
                            ],
                            [
                                -78.652855,
                                -1.222773
                            ],
                            [
                                -78.652722,
                                -1.222705
                            ],
                            [
                                -78.652507,
                                -1.222968
                            ],
                            [
                                -78.652357,
                                -1.222876
                            ],
                            [
                                -78.651622,
                                -1.222994
                            ],
                            [
                                -78.651273,
                                -1.22289
                            ],
                            [
                                -78.651053,
                                -1.222749
                            ],
                            [
                                -78.650646,
                                -1.22241
                            ],
                            [
                                -78.650542,
                                -1.22232
                            ],
                            [
                                -78.650423,
                                -1.222159
                            ],
                            [
                                -78.650449,
                                -1.221989
                            ],
                            [
                                -78.650612,
                                -1.221425
                            ],
                            [
                                -78.650622,
                                -1.221135
                            ],
                            [
                                -78.650516,
                                -1.220528
                            ],
                            [
                                -78.650337,
                                -1.220041
                            ],
                            [
                                -78.650264,
                                -1.219752
                            ],
                            [
                                -78.650135,
                                -1.219642
                            ],
                            [
                                -78.649919,
                                -1.219378
                            ],
                            [
                                -78.649556,
                                -1.218629
                            ],
                            [
                                -78.649475,
                                -1.218536
                            ],
                            [
                                -78.649035,
                                -1.218246
                            ],
                            [
                                -78.648924,
                                -1.218128
                            ],
                            [
                                -78.648844,
                                -1.217995
                            ],
                            [
                                -78.648791,
                                -1.217874
                            ],
                            [
                                -78.648756,
                                -1.217681
                            ],
                            [
                                -78.648828,
                                -1.216815
                            ],
                            [
                                -78.648808,
                                -1.216666
                            ],
                            [
                                -78.648694,
                                -1.216173
                            ],
                            [
                                -78.648613,
                                -1.216067
                            ],
                            [
                                -78.648565,
                                -1.216035
                            ],
                            [
                                -78.648476,
                                -1.216028
                            ],
                            [
                                -78.648352,
                                -1.216069
                            ],
                            [
                                -78.648284,
                                -1.216162
                            ],
                            [
                                -78.648242,
                                -1.216262
                            ],
                            [
                                -78.648207,
                                -1.216449
                            ],
                            [
                                -78.648219,
                                -1.216723
                            ],
                            [
                                -78.648187,
                                -1.217018
                            ],
                            [
                                -78.648198,
                                -1.217417
                            ],
                            [
                                -78.647986,
                                -1.218139
                            ],
                            [
                                -78.647836,
                                -1.218911
                            ],
                            [
                                -78.647788,
                                -1.219014
                            ],
                            [
                                -78.647483,
                                -1.219412
                            ],
                            [
                                -78.647459,
                                -1.219472
                            ],
                            [
                                -78.64746,
                                -1.219536
                            ],
                            [
                                -78.64749,
                                -1.219602
                            ],
                            [
                                -78.647799,
                                -1.21971
                            ],
                            [
                                -78.64803,
                                -1.219815
                            ],
                            [
                                -78.648091,
                                -1.219899
                            ],
                            [
                                -78.648111,
                                -1.220002
                            ],
                            [
                                -78.648109,
                                -1.220138
                            ],
                            [
                                -78.648063,
                                -1.220519
                            ],
                            [
                                -78.648068,
                                -1.220622
                            ],
                            [
                                -78.648157,
                                -1.220841
                            ],
                            [
                                -78.648418,
                                -1.221277
                            ],
                            [
                                -78.648444,
                                -1.221386
                            ],
                            [
                                -78.64841,
                                -1.221472
                            ],
                            [
                                -78.648345,
                                -1.221551
                            ],
                            [
                                -78.648108,
                                -1.221766
                            ],
                            [
                                -78.647692,
                                -1.222155
                            ],
                            [
                                -78.6474,
                                -1.222352
                            ],
                            [
                                -78.646939,
                                -1.222556
                            ],
                            [
                                -78.646447,
                                -1.222773
                            ],
                            [
                                -78.646318,
                                -1.222803
                            ],
                            [
                                -78.646183,
                                -1.22281
                            ],
                            [
                                -78.64583,
                                -1.22276
                            ],
                            [
                                -78.645706,
                                -1.222772
                            ],
                            [
                                -78.645642,
                                -1.222813
                            ],
                            [
                                -78.645611,
                                -1.22286
                            ],
                            [
                                -78.645164,
                                -1.222655
                            ],
                            [
                                -78.645141,
                                -1.22281
                            ],
                            [
                                -78.644971,
                                -1.223083
                            ],
                            [
                                -78.64486,
                                -1.223306
                            ],
                            [
                                -78.644656,
                                -1.223627
                            ],
                            [
                                -78.644608,
                                -1.223747
                            ],
                            [
                                -78.644568,
                                -1.224121
                            ],
                            [
                                -78.644513,
                                -1.224377
                            ],
                            [
                                -78.644466,
                                -1.224461
                            ],
                            [
                                -78.644286,
                                -1.22461
                            ],
                            [
                                -78.644195,
                                -1.224744
                            ],
                            [
                                -78.644195,
                                -1.224812
                            ],
                            [
                                -78.644274,
                                -1.225011
                            ],
                            [
                                -78.644279,
                                -1.225107
                            ],
                            [
                                -78.644243,
                                -1.225211
                            ],
                            [
                                -78.644134,
                                -1.225359
                            ],
                            [
                                -78.64404,
                                -1.225425
                            ],
                            [
                                -78.643951,
                                -1.225445
                            ],
                            [
                                -78.643998,
                                -1.225565
                            ],
                            [
                                -78.644165,
                                -1.22583
                            ],
                            [
                                -78.644338,
                                -1.226239
                            ],
                            [
                                -78.644382,
                                -1.226412
                            ],
                            [
                                -78.644582,
                                -1.226834
                            ],
                            [
                                -78.644599,
                                -1.226902
                            ],
                            [
                                -78.644598,
                                -1.22696
                            ],
                            [
                                -78.644546,
                                -1.227146
                            ],
                            [
                                -78.64456,
                                -1.227463
                            ],
                            [
                                -78.644332,
                                -1.227695
                            ],
                            [
                                -78.643732,
                                -1.228562
                            ],
                            [
                                -78.643657,
                                -1.22864
                            ],
                            [
                                -78.643264,
                                -1.228075
                            ],
                            [
                                -78.643103,
                                -1.227944
                            ],
                            [
                                -78.643093,
                                -1.228051
                            ],
                            [
                                -78.643064,
                                -1.228123
                            ],
                            [
                                -78.642761,
                                -1.228535
                            ],
                            [
                                -78.642572,
                                -1.228847
                            ],
                            [
                                -78.64239,
                                -1.229161
                            ],
                            [
                                -78.642275,
                                -1.229444
                            ],
                            [
                                -78.64218,
                                -1.229752
                            ],
                            [
                                -78.641818,
                                -1.230423
                            ],
                            [
                                -78.641404,
                                -1.23104
                            ],
                            [
                                -78.640957,
                                -1.231727
                            ],
                            [
                                -78.640564,
                                -1.23247
                            ],
                            [
                                -78.640251,
                                -1.232998
                            ],
                            [
                                -78.639835,
                                -1.233591
                            ],
                            [
                                -78.639573,
                                -1.233936
                            ],
                            [
                                -78.639399,
                                -1.234099
                            ],
                            [
                                -78.639131,
                                -1.234299
                            ],
                            [
                                -78.638155,
                                -1.234625
                            ],
                            [
                                -78.637699,
                                -1.234877
                            ],
                            [
                                -78.637568,
                                -1.234876
                            ],
                            [
                                -78.637225,
                                -1.234975
                            ],
                            [
                                -78.636127,
                                -1.23506
                            ],
                            [
                                -78.635693,
                                -1.235037
                            ],
                            [
                                -78.635266,
                                -1.234952
                            ],
                            [
                                -78.634846,
                                -1.234809
                            ],
                            [
                                -78.634563,
                                -1.234748
                            ],
                            [
                                -78.634364,
                                -1.234664
                            ],
                            [
                                -78.634292,
                                -1.234627
                            ],
                            [
                                -78.634246,
                                -1.234584
                            ],
                            [
                                -78.634049,
                                -1.234321
                            ],
                            [
                                -78.633987,
                                -1.234299
                            ],
                            [
                                -78.633954,
                                -1.234304
                            ],
                            [
                                -78.633913,
                                -1.234333
                            ],
                            [
                                -78.633891,
                                -1.234378
                            ],
                            [
                                -78.633891,
                                -1.234412
                            ],
                            [
                                -78.634075,
                                -1.234964
                            ],
                            [
                                -78.634239,
                                -1.235389
                            ],
                            [
                                -78.634291,
                                -1.235693
                            ],
                            [
                                -78.634406,
                                -1.235985
                            ],
                            [
                                -78.634423,
                                -1.236089
                            ],
                            [
                                -78.634427,
                                -1.236468
                            ],
                            [
                                -78.634463,
                                -1.236659
                            ],
                            [
                                -78.634629,
                                -1.23692
                            ],
                            [
                                -78.63466,
                                -1.236982
                            ],
                            [
                                -78.63467,
                                -1.237054
                            ],
                            [
                                -78.6346,
                                -1.237652
                            ],
                            [
                                -78.63447,
                                -1.237973
                            ],
                            [
                                -78.634445,
                                -1.238086
                            ],
                            [
                                -78.634455,
                                -1.238247
                            ],
                            [
                                -78.634488,
                                -1.238316
                            ],
                            [
                                -78.634541,
                                -1.238371
                            ],
                            [
                                -78.634725,
                                -1.23851
                            ],
                            [
                                -78.634733,
                                -1.238564
                            ],
                            [
                                -78.634711,
                                -1.238622
                            ],
                            [
                                -78.634383,
                                -1.238918
                            ],
                            [
                                -78.634294,
                                -1.238986
                            ],
                            [
                                -78.63368,
                                -1.237586
                            ],
                            [
                                -78.633137,
                                -1.237886
                            ],
                            [
                                -78.633055,
                                -1.237927
                            ],
                            [
                                -78.632971,
                                -1.237933
                            ],
                            [
                                -78.632844,
                                -1.238014
                            ],
                            [
                                -78.632707,
                                -1.238103
                            ],
                            [
                                -78.63247,
                                -1.238276
                            ],
                            [
                                -78.631197,
                                -1.239279
                            ],
                            [
                                -78.631168,
                                -1.23934
                            ],
                            [
                                -78.631059,
                                -1.239423
                            ],
                            [
                                -78.630963,
                                -1.239548
                            ],
                            [
                                -78.630868,
                                -1.239763
                            ],
                            [
                                -78.631105,
                                -1.240318
                            ],
                            [
                                -78.631213,
                                -1.240478
                            ],
                            [
                                -78.631597,
                                -1.240853
                            ],
                            [
                                -78.631804,
                                -1.241272
                            ],
                            [
                                -78.632038,
                                -1.241851
                            ],
                            [
                                -78.632287,
                                -1.242689
                            ],
                            [
                                -78.632725,
                                -1.24332
                            ],
                            [
                                -78.632471,
                                -1.243598
                            ],
                            [
                                -78.632362,
                                -1.243717
                            ],
                            [
                                -78.632044,
                                -1.24407
                            ],
                            [
                                -78.631999,
                                -1.244141
                            ],
                            [
                                -78.632014,
                                -1.244275
                            ],
                            [
                                -78.63198,
                                -1.244447
                            ],
                            [
                                -78.631978,
                                -1.244483
                            ],
                            [
                                -78.631944,
                                -1.244547
                            ],
                            [
                                -78.631914,
                                -1.244569
                            ],
                            [
                                -78.631843,
                                -1.244582
                            ],
                            [
                                -78.631808,
                                -1.244573
                            ],
                            [
                                -78.63176,
                                -1.244536
                            ],
                            [
                                -78.631735,
                                -1.244481
                            ],
                            [
                                -78.63166,
                                -1.244503
                            ],
                            [
                                -78.631574,
                                -1.244554
                            ],
                            [
                                -78.631411,
                                -1.244753
                            ],
                            [
                                -78.630854,
                                -1.245401
                            ],
                            [
                                -78.630778,
                                -1.245364
                            ],
                            [
                                -78.630539,
                                -1.245104
                            ],
                            [
                                -78.630012,
                                -1.244619
                            ],
                            [
                                -78.629379,
                                -1.244023
                            ],
                            [
                                -78.62879,
                                -1.243474
                            ],
                            [
                                -78.628183,
                                -1.242899
                            ],
                            [
                                -78.627624,
                                -1.242369
                            ],
                            [
                                -78.627134,
                                -1.242938
                            ],
                            [
                                -78.627035,
                                -1.24305
                            ],
                            [
                                -78.626911,
                                -1.243114
                            ],
                            [
                                -78.626114,
                                -1.244025
                            ],
                            [
                                -78.625993,
                                -1.244108
                            ],
                            [
                                -78.625904,
                                -1.244127
                            ],
                            [
                                -78.625838,
                                -1.244123
                            ],
                            [
                                -78.625743,
                                -1.244094
                            ],
                            [
                                -78.625388,
                                -1.243799
                            ],
                            [
                                -78.625221,
                                -1.243634
                            ],
                            [
                                -78.625014,
                                -1.243482
                            ],
                            [
                                -78.624763,
                                -1.243336
                            ],
                            [
                                -78.624477,
                                -1.243198
                            ],
                            [
                                -78.624366,
                                -1.24316
                            ],
                            [
                                -78.6243,
                                -1.243155
                            ],
                            [
                                -78.624225,
                                -1.243172
                            ],
                            [
                                -78.624124,
                                -1.243249
                            ],
                            [
                                -78.62408,
                                -1.243352
                            ],
                            [
                                -78.624097,
                                -1.243521
                            ],
                            [
                                -78.624132,
                                -1.243651
                            ],
                            [
                                -78.624117,
                                -1.24371
                            ],
                            [
                                -78.624151,
                                -1.243844
                            ],
                            [
                                -78.624152,
                                -1.243917
                            ],
                            [
                                -78.624133,
                                -1.24402
                            ],
                            [
                                -78.624066,
                                -1.244115
                            ],
                            [
                                -78.623971,
                                -1.244164
                            ],
                            [
                                -78.623861,
                                -1.244175
                            ],
                            [
                                -78.623782,
                                -1.24416
                            ],
                            [
                                -78.623726,
                                -1.244066
                            ],
                            [
                                -78.623665,
                                -1.244003
                            ],
                            [
                                -78.623576,
                                -1.243971
                            ],
                            [
                                -78.623092,
                                -1.243987
                            ],
                            [
                                -78.623001,
                                -1.244017
                            ],
                            [
                                -78.62295,
                                -1.244045
                            ],
                            [
                                -78.622898,
                                -1.244102
                            ],
                            [
                                -78.622163,
                                -1.245271
                            ],
                            [
                                -78.622162,
                                -1.245288
                            ],
                            [
                                -78.622138,
                                -1.245349
                            ],
                            [
                                -78.62209,
                                -1.245393
                            ],
                            [
                                -78.622043,
                                -1.245409
                            ],
                            [
                                -78.621258,
                                -1.246586
                            ],
                            [
                                -78.621096,
                                -1.246835
                            ],
                            [
                                -78.620617,
                                -1.247557
                            ],
                            [
                                -78.620523,
                                -1.247697
                            ],
                            [
                                -78.619801,
                                -1.248786
                            ],
                            [
                                -78.61944,
                                -1.249316
                            ],
                            [
                                -78.619127,
                                -1.249773
                            ],
                            [
                                -78.618768,
                                -1.250319
                            ],
                            [
                                -78.618383,
                                -1.250898
                            ],
                            [
                                -78.618059,
                                -1.251405
                            ],
                            [
                                -78.617931,
                                -1.251594
                            ],
                            [
                                -78.617192,
                                -1.252674
                            ],
                            [
                                -78.616429,
                                -1.253774
                            ],
                            [
                                -78.616267,
                                -1.254038
                            ],
                            [
                                -78.615804,
                                -1.254851
                            ],
                            [
                                -78.614912,
                                -1.256569
                            ],
                            [
                                -78.614884,
                                -1.25667
                            ],
                            [
                                -78.614909,
                                -1.256709
                            ],
                            [
                                -78.61492,
                                -1.256792
                            ],
                            [
                                -78.614907,
                                -1.256833
                            ],
                            [
                                -78.61485,
                                -1.256894
                            ],
                            [
                                -78.614798,
                                -1.257009
                            ],
                            [
                                -78.614668,
                                -1.257751
                            ],
                            [
                                -78.61451,
                                -1.258288
                            ],
                            [
                                -78.614474,
                                -1.258368
                            ],
                            [
                                -78.614371,
                                -1.258348
                            ],
                            [
                                -78.614076,
                                -1.25841
                            ],
                            [
                                -78.613335,
                                -1.258594
                            ],
                            [
                                -78.61265,
                                -1.258759
                            ],
                            [
                                -78.612486,
                                -1.258827
                            ],
                            [
                                -78.61232,
                                -1.258925
                            ],
                            [
                                -78.612103,
                                -1.259105
                            ],
                            [
                                -78.611943,
                                -1.259287
                            ],
                            [
                                -78.611796,
                                -1.259541
                            ],
                            [
                                -78.611538,
                                -1.260105
                            ],
                            [
                                -78.611422,
                                -1.26029
                            ],
                            [
                                -78.611326,
                                -1.260442
                            ],
                            [
                                -78.61113,
                                -1.260646
                            ],
                            [
                                -78.6109,
                                -1.260841
                            ],
                            [
                                -78.610404,
                                -1.26114
                            ],
                            [
                                -78.609974,
                                -1.261371
                            ],
                            [
                                -78.609656,
                                -1.261557
                            ],
                            [
                                -78.609092,
                                -1.261903
                            ],
                            [
                                -78.608446,
                                -1.26229
                            ],
                            [
                                -78.60807,
                                -1.262553
                            ],
                            [
                                -78.60784,
                                -1.262698
                            ],
                            [
                                -78.607244,
                                -1.263173
                            ],
                            [
                                -78.607171,
                                -1.263232
                            ],
                            [
                                -78.606983,
                                -1.263376
                            ],
                            [
                                -78.606482,
                                -1.263711
                            ],
                            [
                                -78.606317,
                                -1.263805
                            ],
                            [
                                -78.605968,
                                -1.263958
                            ],
                            [
                                -78.605661,
                                -1.264081
                            ],
                            [
                                -78.605595,
                                -1.264106
                            ],
                            [
                                -78.60551,
                                -1.264035
                            ],
                            [
                                -78.605096,
                                -1.263748
                            ],
                            [
                                -78.604747,
                                -1.263456
                            ],
                            [
                                -78.604629,
                                -1.263326
                            ],
                            [
                                -78.604296,
                                -1.262873
                            ],
                            [
                                -78.604086,
                                -1.262532
                            ],
                            [
                                -78.603958,
                                -1.262296
                            ],
                            [
                                -78.603856,
                                -1.261841
                            ],
                            [
                                -78.603832,
                                -1.261794
                            ],
                            [
                                -78.603731,
                                -1.261593
                            ],
                            [
                                -78.602763,
                                -1.260512
                            ],
                            [
                                -78.60188,
                                -1.259468
                            ],
                            [
                                -78.601754,
                                -1.25934
                            ],
                            [
                                -78.601405,
                                -1.259071
                            ],
                            [
                                -78.600991,
                                -1.25872
                            ],
                            [
                                -78.600552,
                                -1.258331
                            ],
                            [
                                -78.600254,
                                -1.258101
                            ],
                            [
                                -78.599952,
                                -1.257881
                            ],
                            [
                                -78.599351,
                                -1.257485
                            ],
                            [
                                -78.599045,
                                -1.257316
                            ],
                            [
                                -78.598593,
                                -1.256999
                            ],
                            [
                                -78.597564,
                                -1.256199
                            ],
                            [
                                -78.597392,
                                -1.256066
                            ],
                            [
                                -78.597035,
                                -1.255795
                            ],
                            [
                                -78.596781,
                                -1.255585
                            ],
                            [
                                -78.596681,
                                -1.255504
                            ],
                            [
                                -78.596431,
                                -1.255359
                            ],
                            [
                                -78.596151,
                                -1.255225
                            ],
                            [
                                -78.595222,
                                -1.254878
                            ],
                            [
                                -78.594521,
                                -1.254611
                            ],
                            [
                                -78.594073,
                                -1.25444
                            ],
                            [
                                -78.593224,
                                -1.254202
                            ],
                            [
                                -78.59286,
                                -1.254054
                            ],
                            [
                                -78.592644,
                                -1.253926
                            ],
                            [
                                -78.591958,
                                -1.253404
                            ],
                            [
                                -78.591908,
                                -1.253357
                            ],
                            [
                                -78.59157,
                                -1.25305
                            ],
                            [
                                -78.591397,
                                -1.252809
                            ],
                            [
                                -78.591351,
                                -1.252704
                            ],
                            [
                                -78.591217,
                                -1.252188
                            ],
                            [
                                -78.591184,
                                -1.252118
                            ],
                            [
                                -78.591008,
                                -1.251974
                            ],
                            [
                                -78.590835,
                                -1.251867
                            ],
                            [
                                -78.590109,
                                -1.251525
                            ],
                            [
                                -78.589818,
                                -1.251283
                            ],
                            [
                                -78.589364,
                                -1.250825
                            ],
                            [
                                -78.589245,
                                -1.250638
                            ],
                            [
                                -78.589014,
                                -1.250376
                            ],
                            [
                                -78.588725,
                                -1.250049
                            ],
                            [
                                -78.588471,
                                -1.249767
                            ],
                            [
                                -78.588407,
                                -1.249722
                            ],
                            [
                                -78.588314,
                                -1.249667
                            ],
                            [
                                -78.588247,
                                -1.249645
                            ],
                            [
                                -78.587366,
                                -1.249517
                            ],
                            [
                                -78.587194,
                                -1.249498
                            ],
                            [
                                -78.586952,
                                -1.249484
                            ],
                            [
                                -78.586793,
                                -1.249518
                            ],
                            [
                                -78.586652,
                                -1.249587
                            ],
                            [
                                -78.586517,
                                -1.249684
                            ],
                            [
                                -78.586282,
                                -1.249889
                            ],
                            [
                                -78.585992,
                                -1.250116
                            ],
                            [
                                -78.585723,
                                -1.250285
                            ],
                            [
                                -78.585628,
                                -1.250344
                            ],
                            [
                                -78.585122,
                                -1.250672
                            ],
                            [
                                -78.585047,
                                -1.250757
                            ],
                            [
                                -78.584974,
                                -1.250872
                            ],
                            [
                                -78.584926,
                                -1.251002
                            ],
                            [
                                -78.584912,
                                -1.251399
                            ],
                            [
                                -78.584895,
                                -1.251638
                            ],
                            [
                                -78.58486,
                                -1.251738
                            ],
                            [
                                -78.584793,
                                -1.251828
                            ],
                            [
                                -78.584669,
                                -1.251896
                            ],
                            [
                                -78.584281,
                                -1.252005
                            ],
                            [
                                -78.584174,
                                -1.252047
                            ],
                            [
                                -78.584058,
                                -1.252136
                            ],
                            [
                                -78.583978,
                                -1.252243
                            ],
                            [
                                -78.583641,
                                -1.252796
                            ],
                            [
                                -78.583477,
                                -1.253068
                            ],
                            [
                                -78.583394,
                                -1.253266
                            ],
                            [
                                -78.583248,
                                -1.253463
                            ],
                            [
                                -78.583089,
                                -1.253577
                            ],
                            [
                                -78.582707,
                                -1.253695
                            ],
                            [
                                -78.582202,
                                -1.253783
                            ],
                            [
                                -78.58212,
                                -1.253897
                            ],
                            [
                                -78.581981,
                                -1.254238
                            ],
                            [
                                -78.581905,
                                -1.254362
                            ],
                            [
                                -78.581694,
                                -1.254648
                            ],
                            [
                                -78.580465,
                                -1.254622
                            ],
                            [
                                -78.581694,
                                -1.254648
                            ],
                            [
                                -78.581905,
                                -1.254362
                            ],
                            [
                                -78.581981,
                                -1.254238
                            ],
                            [
                                -78.58212,
                                -1.253897
                            ],
                            [
                                -78.582202,
                                -1.253783
                            ],
                            [
                                -78.582707,
                                -1.253695
                            ],
                            [
                                -78.583089,
                                -1.253577
                            ],
                            [
                                -78.583248,
                                -1.253463
                            ],
                            [
                                -78.583394,
                                -1.253266
                            ],
                            [
                                -78.583477,
                                -1.253068
                            ],
                            [
                                -78.583641,
                                -1.252796
                            ],
                            [
                                -78.583978,
                                -1.252243
                            ],
                            [
                                -78.584058,
                                -1.252136
                            ],
                            [
                                -78.584174,
                                -1.252047
                            ],
                            [
                                -78.584281,
                                -1.252005
                            ],
                            [
                                -78.584669,
                                -1.251896
                            ],
                            [
                                -78.584793,
                                -1.251828
                            ],
                            [
                                -78.58486,
                                -1.251738
                            ],
                            [
                                -78.584895,
                                -1.251638
                            ],
                            [
                                -78.584912,
                                -1.251399
                            ],
                            [
                                -78.584926,
                                -1.251002
                            ],
                            [
                                -78.584974,
                                -1.250872
                            ],
                            [
                                -78.585047,
                                -1.250757
                            ],
                            [
                                -78.585122,
                                -1.250672
                            ],
                            [
                                -78.585628,
                                -1.250344
                            ],
                            [
                                -78.585723,
                                -1.250285
                            ],
                            [
                                -78.585992,
                                -1.250116
                            ],
                            [
                                -78.586282,
                                -1.249889
                            ],
                            [
                                -78.586517,
                                -1.249684
                            ],
                            [
                                -78.586652,
                                -1.249587
                            ],
                            [
                                -78.586793,
                                -1.249518
                            ],
                            [
                                -78.586952,
                                -1.249484
                            ],
                            [
                                -78.587194,
                                -1.249498
                            ],
                            [
                                -78.587366,
                                -1.249517
                            ],
                            [
                                -78.588247,
                                -1.249645
                            ],
                            [
                                -78.588314,
                                -1.249667
                            ],
                            [
                                -78.588407,
                                -1.249722
                            ],
                            [
                                -78.588471,
                                -1.249767
                            ],
                            [
                                -78.588725,
                                -1.250049
                            ],
                            [
                                -78.589014,
                                -1.250376
                            ],
                            [
                                -78.589245,
                                -1.250638
                            ],
                            [
                                -78.589421,
                                -1.250743
                            ],
                            [
                                -78.589871,
                                -1.251201
                            ],
                            [
                                -78.590114,
                                -1.251417
                            ],
                            [
                                -78.590345,
                                -1.25153
                            ],
                            [
                                -78.590791,
                                -1.251733
                            ],
                            [
                                -78.591061,
                                -1.251895
                            ],
                            [
                                -78.591195,
                                -1.251992
                            ],
                            [
                                -78.591294,
                                -1.252124
                            ],
                            [
                                -78.591441,
                                -1.252595
                            ],
                            [
                                -78.591545,
                                -1.252813
                            ],
                            [
                                -78.591621,
                                -1.252926
                            ],
                            [
                                -78.591767,
                                -1.253091
                            ],
                            [
                                -78.592021,
                                -1.253326
                            ],
                            [
                                -78.592202,
                                -1.253472
                            ],
                            [
                                -78.592688,
                                -1.253834
                            ],
                            [
                                -78.592858,
                                -1.253934
                            ],
                            [
                                -78.593096,
                                -1.254046
                            ],
                            [
                                -78.594145,
                                -1.254353
                            ],
                            [
                                -78.595286,
                                -1.254776
                            ],
                            [
                                -78.596079,
                                -1.255084
                            ],
                            [
                                -78.596452,
                                -1.255254
                            ],
                            [
                                -78.596716,
                                -1.255406
                            ],
                            [
                                -78.597245,
                                -1.255826
                            ],
                            [
                                -78.597619,
                                -1.256132
                            ],
                            [
                                -78.598161,
                                -1.256551
                            ],
                            [
                                -78.598322,
                                -1.256674
                            ],
                            [
                                -78.59868,
                                -1.256942
                            ],
                            [
                                -78.599728,
                                -1.257612
                            ],
                            [
                                -78.600311,
                                -1.258016
                            ],
                            [
                                -78.600772,
                                -1.258393
                            ],
                            [
                                -78.60109,
                                -1.258688
                            ],
                            [
                                -78.601844,
                                -1.259295
                            ],
                            [
                                -78.601949,
                                -1.259399
                            ],
                            [
                                -78.60257,
                                -1.260149
                            ],
                            [
                                -78.603237,
                                -1.260877
                            ],
                            [
                                -78.603628,
                                -1.261324
                            ],
                            [
                                -78.603809,
                                -1.261562
                            ],
                            [
                                -78.603903,
                                -1.26178
                            ],
                            [
                                -78.604061,
                                -1.26237
                            ],
                            [
                                -78.604131,
                                -1.262497
                            ],
                            [
                                -78.60452,
                                -1.26307
                            ],
                            [
                                -78.60475,
                                -1.263349
                            ],
                            [
                                -78.604832,
                                -1.263426
                            ],
                            [
                                -78.605169,
                                -1.263709
                            ],
                            [
                                -78.605576,
                                -1.264009
                            ],
                            [
                                -78.605755,
                                -1.263975
                            ],
                            [
                                -78.605957,
                                -1.263894
                            ],
                            [
                                -78.606293,
                                -1.263748
                            ],
                            [
                                -78.606452,
                                -1.263659
                            ],
                            [
                                -78.607115,
                                -1.263151
                            ],
                            [
                                -78.607186,
                                -1.263093
                            ],
                            [
                                -78.607244,
                                -1.263173
                            ],
                            [
                                -78.607357,
                                -1.26333
                            ],
                            [
                                -78.607754,
                                -1.264009
                            ],
                            [
                                -78.608634,
                                -1.265546
                            ],
                            [
                                -78.608893,
                                -1.26597
                            ],
                            [
                                -78.609239,
                                -1.266386
                            ],
                            [
                                -78.60944,
                                -1.266634
                            ],
                            [
                                -78.609492,
                                -1.266663
                            ],
                            [
                                -78.609846,
                                -1.266897
                            ],
                            [
                                -78.610287,
                                -1.267181
                            ],
                            [
                                -78.610682,
                                -1.267392
                            ],
                            [
                                -78.610968,
                                -1.267505
                            ],
                            [
                                -78.611404,
                                -1.267694
                            ],
                            [
                                -78.611493,
                                -1.267705
                            ],
                            [
                                -78.611558,
                                -1.267607
                            ],
                            [
                                -78.611656,
                                -1.267542
                            ],
                            [
                                -78.611741,
                                -1.267522
                            ],
                            [
                                -78.611828,
                                -1.267528
                            ],
                            [
                                -78.611909,
                                -1.26756
                            ],
                            [
                                -78.611975,
                                -1.267612
                            ],
                            [
                                -78.612024,
                                -1.267681
                            ],
                            [
                                -78.61205,
                                -1.267754
                            ],
                            [
                                -78.612055,
                                -1.267832
                            ],
                            [
                                -78.61204,
                                -1.267908
                            ],
                            [
                                -78.612005,
                                -1.267977
                            ],
                            [
                                -78.611904,
                                -1.268069
                            ],
                            [
                                -78.61183,
                                -1.268165
                            ],
                            [
                                -78.611792,
                                -1.268274
                            ],
                            [
                                -78.611751,
                                -1.268648
                            ],
                            [
                                -78.611743,
                                -1.268924
                            ],
                            [
                                -78.61174,
                                -1.268992
                            ],
                            [
                                -78.61169,
                                -1.270011
                            ],
                            [
                                -78.611697,
                                -1.270462
                            ],
                            [
                                -78.611749,
                                -1.270592
                            ],
                            [
                                -78.611842,
                                -1.270729
                            ],
                            [
                                -78.611882,
                                -1.270797
                            ],
                            [
                                -78.611895,
                                -1.27086
                            ],
                            [
                                -78.611888,
                                -1.270925
                            ],
                            [
                                -78.611862,
                                -1.270985
                            ],
                            [
                                -78.61182,
                                -1.271035
                            ],
                            [
                                -78.611764,
                                -1.271069
                            ],
                            [
                                -78.61169,
                                -1.271461
                            ],
                            [
                                -78.611621,
                                -1.272025
                            ],
                            [
                                -78.611607,
                                -1.272119
                            ],
                            [
                                -78.611455,
                                -1.272996
                            ],
                            [
                                -78.611389,
                                -1.273425
                            ],
                            [
                                -78.6113,
                                -1.273818
                            ],
                            [
                                -78.611244,
                                -1.274034
                            ],
                            [
                                -78.611121,
                                -1.274486
                            ],
                            [
                                -78.610936,
                                -1.275047
                            ],
                            [
                                -78.610246,
                                -1.277307
                            ],
                            [
                                -78.611107,
                                -1.277608
                            ],
                            [
                                -78.611693,
                                -1.27781
                            ],
                            [
                                -78.612229,
                                -1.278003
                            ],
                            [
                                -78.613962,
                                -1.278663
                            ],
                            [
                                -78.613701,
                                -1.278878
                            ],
                            [
                                -78.613293,
                                -1.279173
                            ],
                            [
                                -78.61294,
                                -1.279465
                            ],
                            [
                                -78.61275,
                                -1.28113
                            ],
                            [
                                -78.612594,
                                -1.282209
                            ],
                            [
                                -78.612386,
                                -1.283049
                            ]
                        ],
                        "type": "LineString"
                    }
                }
            ],
            "metadata": {
                "attribution": "openrouteservice.org | OpenStreetMap contributors",
                "service": "routing",
                "timestamp": 1740065015181,
                "query": {
                    "coordinates": [
                        [
                            -78.61234903335573,
                            -1.2830400896671588
                        ],
                        [
                            -78.61234903335573,
                            -1.2830400896671588
                        ],
                        [
                            -78.61234654232817,
                            -1.283089822
                        ],
                        [
                            -78.61209363154917,
                            -1.279294345
                        ],
                        [
                            -78.61869750072543,
                            -1.278292221
                        ],
                        [
                            -78.62693152097586,
                            -1.259863295
                        ],
                        [
                            -78.62296365547924,
                            -1.244904661
                        ],
                        [
                            -78.59590215860166,
                            -1.225119429
                        ],
                        [
                            -78.60796846310403,
                            -1.221758392
                        ],
                        [
                            -78.64116294,
                            -1.231845098576045
                        ],
                        [
                            -78.65892133465775,
                            -1.2310977267718215
                        ],
                        [
                            -78.58046022972957,
                            -1.2548432764837258
                        ],
                        [
                            -78.61234903335573,
                            -1.2830400896671588
                        ]
                    ],
                    "profile": "driving-car",
                    "profileName": "driving-car",
                    "format": "geojson"
                },
                "engine": {
                    "version": "9.0.0",
                    "build_date": "2025-01-27T14:56:02Z",
                    "graph_date": "2025-01-28T09:38:16Z"
                }
            }
        }
    }
];

export const ubicacionesInicio = [
    { nombre: 'Ambato', coordenadas: [-78.61234903335573, -1.2830400896671588] },
    { nombre: 'Cevallos', coordenadas: [-78.633441, -1.360463] }
  ];