/* HIGH SCHOOL MUSICAL */
import portada1 from '../assets/img/cartelera/high-school-musical/portada.webp';
import portadaCard1 from '../assets/img/cartelera/high-school-musical/portada-card.webp';
import cartel1 from '../assets/img/cartelera/high-school-musical/cartel.webp';
import troyBolton from '../assets/img/cartelera/high-school-musical/personaje-troy_bolton.webp';
import gabriellaMontez from '../assets/img/cartelera/high-school-musical/personaje-gabriella_montez.webp';
import sharpayEvans from '../assets/img/cartelera/high-school-musical/personaje-sharpay_evans.webp';
import ryanEvans from '../assets/img/cartelera/high-school-musical/personaje-ryan_evans.webp';
import chadDanforth from '../assets/img/cartelera/high-school-musical/personaje-chad_danforth.webp';
import taylorMcKessie from '../assets/img/cartelera/high-school-musical/personaje-taylor-mckessie.webp';
import galeriaHs1 from '../assets/img/cartelera/high-school-musical/galeria-1.webp';
import galeriaHs2 from '../assets/img/cartelera/high-school-musical/galeria-2.webp';
import galeriaHs3 from '../assets/img/cartelera/high-school-musical/galeria-3.webp';
import galeriaHs4 from '../assets/img/cartelera/high-school-musical/galeria-4.webp';
import galeriaHs5 from '../assets/img/cartelera/high-school-musical/galeria-5.webp';
import galeriaHs6 from '../assets/img/cartelera/high-school-musical/galeria-6.webp';
import galeriaHs7 from '../assets/img/cartelera/high-school-musical/galeria-7.webp';
import galeriaHs8 from '../assets/img/cartelera/high-school-musical/galeria-8.webp';


export const CATALOGO = [
    {
        //CARD 
        id: 1,
        slug: 'high-school-musical',
        dia: 14,
        tituloEsp: 'High School Musical', // poner , y no ; !!!
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Película', // serie, pelicula o actividad
        duracion: 98,
        horario: ['12:30', '19:30'], // ponemos un array para el horario, ya que puede haber más de uno

        //ARTICULO -- info anterior y esta
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Zac Efron',
                personaje: 'Troy Bolton'
            },
            {
                id: 2,
                imagen: gabriellaMontez,
                actor: 'Vanessa Hudgens',
                personaje: 'Gabriella Montez'
            },

            {
                id: 3,
                imagen: sharpayEvans,
                actor: 'Ashley French',
                personaje: 'Sharpay Evans'
            },
            {
                id: 4,
                imagen: ryanEvans,
                actor: 'Lucas Grabeel',
                personaje: 'Ryan Evans'
            },
            {
                id: 5,
                imagen: chadDanforth,
                actor: 'Corbin Bleu',
                personaje: 'Chad Danforth'
            },
            {
                id: 6,
                imagen: taylorMcKessie,
                actor: 'Monique Coleman',
                personaje: 'Taylor McKessie'
            }
        ],


        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/d3fxIvliIj4',
        cita: '«East High es tener amigos que conservaremos por el resto de nuestras vidas, y eso significa que realmente estamos ‘juntos en esto».',
        autorCita: 'Troy Bolton',

        //GALERIA
        imagenesGaleria: [galeriaHs1, galeriaHs2, galeriaHs3, galeriaHs4, galeriaHs5, galeriaHs6, galeriaHs7, galeriaHs8]
    }
    ,
    {
        //CARD 
        id: 2,
        slug: 'high-school-musical',
        dia: 14,
        tituloEsp: 'High School Musical', // poner , y no ; !!!
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Película', // serie, pelicula o actividad
        duracion: 98,
        horario: ['12:30', '19:30'], // ponemos un array para el horario, ya que puede haber más de uno

        //ARTICULO -- info anterior y esta
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Zac Efron',
                personaje: 'Troy Bolton'
            },
            {
                id: 2,
                imagen: gabriellaMontez,
                actor: 'Vanessa Hudgens',
                personaje: 'Gabriella Montez'
            },

            {
                id: 3,
                imagen: sharpayEvans,
                actor: 'Ashley French',
                personaje: 'Sharpay Evans'
            },
            {
                id: 4,
                imagen: ryanEvans,
                actor: 'Lucas Grabeel',
                personaje: 'Ryan Evans'
            },
            {
                id: 5,
                imagen: chadDanforth,
                actor: 'Corbin Bleu',
                personaje: 'Chad Danforth'
            },
            {
                id: 6,
                imagen: taylorMcKessie,
                actor: 'Monique Coleman',
                personaje: 'Taylor McKessie'
            }
        ],


        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/d3fxIvliIj4',
        cita: '«East High es tener amigos que conservaremos por el resto de nuestras vidas, y eso significa que realmente estamos ‘juntos en esto».',
        autorCita: 'Troy Bolton',

        //GALERIA
        imagenesGaleria: [galeriaHs1, galeriaHs2, galeriaHs3, galeriaHs4, galeriaHs5, galeriaHs6, galeriaHs7, galeriaHs8]
    },
    {
        //CARD 
        id: 3,
        slug: 'high-school-musical',
        dia: 14,
        tituloEsp: 'High School Musical', // poner , y no ; !!!
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Película', // serie, pelicula o actividad
        duracion: 98,
        horario: ['12:30', '19:30'], // ponemos un array para el horario, ya que puede haber más de uno

        //ARTICULO -- info anterior y esta
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Zac Efron',
                personaje: 'Troy Bolton'
            },
            {
                id: 2,
                imagen: gabriellaMontez,
                actor: 'Vanessa Hudgens',
                personaje: 'Gabriella Montez'
            },

            {
                id: 3,
                imagen: sharpayEvans,
                actor: 'Ashley French',
                personaje: 'Sharpay Evans'
            },
            {
                id: 4,
                imagen: ryanEvans,
                actor: 'Lucas Grabeel',
                personaje: 'Ryan Evans'
            },
            {
                id: 5,
                imagen: chadDanforth,
                actor: 'Corbin Bleu',
                personaje: 'Chad Danforth'
            },
            {
                id: 6,
                imagen: taylorMcKessie,
                actor: 'Monique Coleman',
                personaje: 'Taylor McKessie'
            }
        ],


        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/d3fxIvliIj4',
        cita: '«East High es tener amigos que conservaremos por el resto de nuestras vidas, y eso significa que realmente estamos ‘juntos en esto».',
        autorCita: 'Troy Bolton',

        //GALERIA
        imagenesGaleria: [galeriaHs1, galeriaHs2, galeriaHs3, galeriaHs4, galeriaHs5, galeriaHs6, galeriaHs7, galeriaHs8]
    },
    {
        //CARD 
        id: 4,
        slug: 'high-school-musical',
        dia: 14,
        tituloEsp: 'High School Musical', // poner , y no ; !!!
        imagen: portada1,
        imagenCard: portadaCard1,
        tipo: 'Película', // serie, pelicula o actividad
        duracion: 98,
        horario: ['12:30', '19:30'], // ponemos un array para el horario, ya que puede haber más de uno

        //ARTICULO -- info anterior y esta
        cartel: cartel1,
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
                imagen: troyBolton,
                actor: 'Zac Efron',
                personaje: 'Troy Bolton'
            },
            {
                id: 2,
                imagen: gabriellaMontez,
                actor: 'Vanessa Hudgens',
                personaje: 'Gabriella Montez'
            },

            {
                id: 3,
                imagen: sharpayEvans,
                actor: 'Ashley French',
                personaje: 'Sharpay Evans'
            },
            {
                id: 4,
                imagen: ryanEvans,
                actor: 'Lucas Grabeel',
                personaje: 'Ryan Evans'
            },
            {
                id: 5,
                imagen: chadDanforth,
                actor: 'Corbin Bleu',
                personaje: 'Chad Danforth'
            },
            {
                id: 6,
                imagen: taylorMcKessie,
                actor: 'Monique Coleman',
                personaje: 'Taylor McKessie'
            }
        ],


        //TRAILER
        trailerVideo: 'https://www.youtube.com/embed/d3fxIvliIj4',
        cita: '«East High es tener amigos que conservaremos por el resto de nuestras vidas, y eso significa que realmente estamos ‘juntos en esto».',
        autorCita: 'Troy Bolton',

        //GALERIA
        imagenesGaleria: [galeriaHs1, galeriaHs2, galeriaHs3, galeriaHs4, galeriaHs5, galeriaHs6, galeriaHs7, galeriaHs8]
    }
]