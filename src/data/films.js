
export const CATALOGO_PELIS = [
    {
        //CARD 
        id: 1,
        titulo: 'High School Musical', // poner , y no ; !!!
        imagen: '', 
        tipo: 'Película', // serie, pelicula o actividad
        duracion: '',
        fecha: '',
        horario: ['', ''], // ponemos un array para el horario, ya que puede haber más de uno

        //ARTICULO -- info anterior y esta
        cartel: '',
        sala: '',

        //INFO DESPLEGABLE
        tituloEsp: '', // pensar si este va a ser el que salga de principal (por si lo borro)
        tituloVo: '',
        autoria: '',
        bandaSonora: '',
        saga: ['', ''],
        genero: '', // categorias
        sinopsis: '',

        //REPARTO DESPLEGABLE
        personajes: [ // array de objetos, cada objeto con id, imagen, nombre y personaje
            {
                id: 1,
                imagen: '',
                nombre: '',
                personaje: ''
            },
            {
                id: 2,
                imagen: '',
                nombre: '',
                personaje: ''
            },
            {
                id: 3,
                imagen: '',
                nombre: '',
                personaje: ''
            },
            {
                id: 4,
                imagen: '',
                nombre: '',
                personaje: ''
            },
            {
                id: 5,
                imagen: '',
                nombre: '',
                personaje: ''
            },
            {
                id: 6,
                imagen: '',
                nombre: '',
                personaje: ''
            }
        ],
        

        //TRAILER
        trailerVideo: '',
        cita: '',
        auotorCita: '',

        //GALERIA
        imagenesGaleria: ['', '', '', '', '', '']
    }
]