import { Ciudad } from "../interfaces/interfaces";

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


export const ubicacionesInicio = [
    { nombre: 'Ambato', coordenadas: [-78.61234903335573, -1.2830400896671588] },
    { nombre: 'Cevallos', coordenadas: [-78.633441, -1.360463] }
  ];

  export const ciudadesLista: Ciudad[] = [
    { nombre: 'AMBATO', codigo: 1 },
    { nombre: 'PILLARO', codigo: 10 },
    { nombre: 'PINGUILI', codigo: 11 },
    { nombre: 'PUJILI', codigo: 12 },
    { nombre: 'QUITO', codigo: 13 },
    { nombre: 'RIOBAMBA', codigo: 14 },
    { nombre: 'SALCEDO', codigo: 15 },
    { nombre: 'SAQUISILÍ', codigo: 16 },
    { nombre: 'CHILLANES', codigo: 2 },
    { nombre: 'COLTA', codigo: 3 },
    { nombre: 'DURÁN', codigo: 4 },
    { nombre: 'GUAMOTE', codigo: 5 },
    { nombre: 'GUARANDA', codigo: 6 },
    { nombre: 'LATACUNGA', codigo: 7 },
    { nombre: 'MOCHA', codigo: 8 },
    { nombre: 'PELILEO', codigo: 9 },
  ];
  