
export const CATALOGO_PELIS = [
    {
        //CARD 
        id: 1,
        dia: 14,
        tituloEsp: 'High School Musical', // poner , y no ; !!!
        imagen: '',
        tipo: 'Película', // serie, pelicula o actividad
        duracion: 98,
        fecha: 2006,
        horario: ['12:30', '19:30S'], // ponemos un array para el horario, ya que puede haber más de uno

        //ARTICULO -- info anterior y esta
        cartel: '',
        sala: 1,

        //INFO DESPLEGABLE

        tituloVo: 'High School Musical',
        directorx: 'Kenny Ortega',
        bandaSonora: 'We`re All In This Together',
        saga: ['HS Musical 2', 'HS Musical 3'],
        genero: ['Musical', 'Romance'], // categorias
        sinopsis: 'Un atleta popular de secundaria y una chica académicamente talentosa consiguen papeles en el musical de la escuela y desarrollan una amistad que amenaza el orden social de East High.',

        //REPARTO DESPLEGABLE
        personajes: [ // array de objetos, cada objeto con id, imagen, nombre y personaje
            {
                id: 1,
                imagen: '',
                actor: 'Zac Efron',
                personaje: 'Troy Bolton'
            },
            {
                id: 2,
                imagen: '',
                actor: 'Vanessa Hudgens',
                personaje: 'Gabriella Montez'
            },

            {
                id: 3,
                imagen: '',
                actor: 'Ashley French',
                personaje: 'Sharpay Evans'
            },
            {
                id: 4,
                imagen: '',
                actor: 'Lucas Grabeel',
                personaje: 'Ryan Evans'
            },
            {
                id: 5,
                imagen: '',
                actor: 'Corbin Bleu',
                personaje: 'Chad Danforth'
            },
            {
                id: 6,
                imagen: '',
                actor: 'Monique Coleman',
                personaje: 'Taylor McKessie'
            }
        ],


        //TRAILER
        trailerVideo: '',
        cita: '«East High es tener amigos que conservaremos por el resto de nuestras vidas, y eso significa que realmente estamos ‘juntos en esto».',
        autorCita: '',

        //GALERIA
        imagenesGaleria: ['', '', '', '', '', '']
    }
]