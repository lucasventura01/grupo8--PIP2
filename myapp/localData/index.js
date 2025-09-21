const dataPerfumes = {
    usuario: {
        email: "claudioPaz@gmail.com.ar",
        username: "ClaudioPaz",
        password: "claudio123"
    },
    productos: [
        {
            imagen: "./images/1006634.webp",
            nombre: "Jean Paul Gaultier Le Male Elixir",
            descripcion: "La Nariz detrás de esta fragrancia es Quentin Bisch. Las Notas de Salida son lavanda y menta; las Notas de Corazón son vainilla y benjuí; las Notas de Fondo son miel, haba tonka y tabaco.",
            comentarios: [
                { usuario: "Juan", comentario: "Me encanta este perfume, es perfecta para la pelopincho." },
                { usuario: "Esteban", comentario: "El perfume más rico de mi novio." },
                { usuario: "Carlos", comentario: "Duración increíble, me lo puse hace tres días y lo sigo oliendo, ya me cansé." }
            ]
        },
        {
            imagen: "./images/o.15558.jpg",
            nombre: "Jean Paul Gaultier Le Male Gladiator",
            descripcion: "La Nota de Salida es menta; las Notas de Corazón son lavanda y menta; las Notas de Fondo son vainilla, haba tonka y ámbar.",
            comentarios: [
                { usuario: "Ana", comentario: "Un clásico que nunca falla." },
                { usuario: "Luis", comentario: "Me siento Beckham cada vez que lo uso." },
                { usuario: "Esteban", comentario: "Ideal para sesión de squash." }
            ]
        },
        {
            imagen: "./images/posiongirl.avif",
            nombre: "Dior Poison Girl",
            descripcion: "La Nariz detrás de esta fragrancia es François Demachy. Las Notas de Salida son naranja amarga y limón (lima ácida); las Notas de Corazón son rosa de Damasco, rosa de Grasse y flor de azahar del naranjo; las Notas de Fondo son vainilla, almendra, haba tonka, bálsamo de Tolú, sándalo, cachemira y heliotropo.",
            comentarios: [
                { usuario: "Marta", comentario: "Mi perro no puede dejar de usarlo." },
                { usuario: "Diego", comentario: "Perfecto para elecciones presidenciales." },
                { usuario: "Lucia", comentario: "Un aroma que enamora." }
            ]
        },
        {
            imagen: "./images/clubdenuit.png",
            nombre: "Armaf Club de Nuit Intense",
            descripcion: "Las Notas de Salida son limón (lima ácida), piña, bergamota, grosellas negras y manzana; las Notas de Corazón son abedul, jazmín y rosa; las Notas de Fondo son almizcle, ámbar gris, pachulí y vainilla.",
            comentarios: [
                { usuario: "Pedro", comentario: "Lo usa todo el mundo, ya no me gusta." },
                { usuario: "Clara", comentario: "El perfume favorito de mostaza Merlo." },
                { usuario: "Javier", comentario: "Ideal para viajecito a mendoza en agosto." }
            ]
        },
        {
            imagen: "./images/boss.webp",
            nombre: "Hugo Boss The Scent",
            descripcion: "Las Notas de Salida son jengibre, mandarina y bergamota; las Notas de Corazón son maninka y lavanda; las Notas de Fondo son cuero y notas amaderadas.",
            comentarios: [
                { usuario: "Santiago", comentario: "Me transporta a Avellaneda cada vez que lo uso." },
                { usuario: "Valentina", comentario: "El perfume favorito de mi primo Manu." },
                { usuario: "Andrés", comentario: "Perfecto para bailar bachata." }
            ]
        },
        {
            imagen: "./images/cuba.webp",
            nombre: "Cuba Paris Prestige",
            descripcion: "Las Notas de Salida son grosellas negras, bergamota, limón (lima ácida) y toronja (pomelo); las Notas de Corazón son lavanda, cardamomo, jazmín y romero; las Notas de Fondo son ámbar, cedro, ládano, musgo de roble y vetiver.",
            comentarios: [
                { usuario: "Isabella", comentario: "Mi perfume favorito, me siento la mona Giménez." },
                { usuario: "Fernando", comentario: "Es el favorito de los croatas." },
                { usuario: "Camila", comentario: "Más fuerte que mermelada de ajo." }
            ]
        },
        {
            imagen: "./images/samsara.jpg",
            nombre: "Samsara guerlain",
            descripcion: "La Nariz detrás de esta fragrancia es Jean-Paul Guerlain. Las Notas de Salida son ylang-ylang, durazno (melocotón), bergamota, notas verdes y limón (lima ácida); las Notas de Corazón son iris, jazmín, narciso, raíz de lirio, violeta y rosa; las Notas de Fondo son sándalo, vainilla, iris, ámbar, haba tonka y almizcle.",
            comentarios: [
                { usuario: "Ricardo", comentario: "Un aroma único, me encanta." },
                { usuario: "Natalia", comentario: "El perfume favorito de la novia de mi esposo." },
                { usuario: "Gonzalo", comentario: "Buenísimo, lo uso para publicitar sitios de apuestas." }
            ]
        },
        {
            imagen: "./images/diesel.jpeg",
            nombre: "Diesel by Diesel",
            descripcion: "Las Notas de Salida son jengibre y bergamota; las Notas de Corazón son lavanda y flor del algodonero; las Notas de Fondo son vainilla y Amberwood.",
            comentarios: [
                { usuario: "Lorena", comentario: "Mi novio huele a nafta con este perfume." },
                { usuario: "Matías", comentario: "Ideal para hacer arrancar el auto." },
                { usuario: "Julieta", comentario: "Un aroma que no pasa desapercibido." }
            ]
        },
        {
            imagen: "./images/one.jpeg",
            nombre: "Calvin Klein One",
            descripcion: "ULas Notas de Salida son limón (lima ácida), notas verdes, bergamota, mandarina, piña, cardamomo y papaya; las Notas de Corazón son lirio de los valles (muguete), jazmín, violeta, rosa, nuez moscada, fresia y raíz de lirio; las Notas de Fondo son acordes verdes, almizcle, cedro, té verde, sándalo, musgo de roble y ámbar.",
            comentarios: [
                { usuario: "Sofía", comentario: "La fragancia de mi tiastro." },
                { usuario: "Alejandro", comentario: "El favorito de mis amigos." },
                { usuario: "Mariana", comentario: "No me gustó para nada." }
            ]
        },
        {
            imagen: "./images/dior.jpeg",
            nombre: "Dior Homme Intense",
            descripcion: "La Nariz detrás de esta fragrancia es François Demachy. La Nota de Salida es lavanda; las Notas de Corazón son iris, almizcle ambreta y pera; las Notas de Fondo son cedro de Virginia y vetiver.",
            comentarios: [
                { usuario: "Laura", comentario: "Huele a baño después de comer esparragos." },
                { usuario: "Carlos", comentario: "Ideal para climas cálidos." },
                { usuario: "Elena", comentario: "Un aroma refrescante y ligero." }
            ]
        }
    ]

}

module.exports = dataPerfumes;