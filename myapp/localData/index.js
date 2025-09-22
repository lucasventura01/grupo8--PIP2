const dataPerfumes = {
    usuario: {
        email: "mateo@ejemplo.com.ar",
        username: "mateo",
        password: "mateo123",
        foto_perfil: "../public/users/profile-default.png"
    },
    productos: [
        {
            imagen: "../public/images/invictus_victory_elixir.jpg",
            id: 1,
            nombre: "Invictus Victory Elixir",
            descripcion: "Una fragancia dulce, con vainilla y ámbar especiado. Ideal para la noche.",
            comentarios: [
                { usuario: "Juan", comentario: "Me encanta este perfume, es perfecta para el boliche." },
                { usuario: "Sofia", comentario: "El perfume más rico de mi novio." },
                { usuario: "Carlos", comentario: "Duración increíble, me lo puse hace tres días y lo sigo oliendo en mi buzo." }
            ]
        },
        {
            imagen: "../public/images/bleu_de_chanel.jpg",
            id: 2,
            nombre: "Bleu de Chanel",
            descripcion: "Una fragancia fresca y amaderada, perfecta para cualquier ocasión.",
            comentarios: [
                { usuario: "Ana", comentario: "Un clásico que nunca falla." },
                { usuario: "Luis", comentario: "Me siento elegante cada vez que lo uso." },
                { usuario: "Esteban", comentario: "Ideal para la oficina." }
            ]
        },
        {
            imagen: "../public/images/jean_paul_gaultier_abs.jpg",
            id: 3,
            nombre: "Jean Paul Gaultier Le Male Elixir Absolu",
            descripcion: "Una fragancia intensa y seductora, con notas de canela y vainilla.",
            comentarios: [
                { usuario: "Marta", comentario: "Mi esposo no puede dejar de usarlo." },
                { usuario: "Diego", comentario: "Perfecto para citas nocturnas." },
                { usuario: "Lucia", comentario: "Un aroma que enamora." }
            ]
        },
        {
            imagen: "../public/images/dior_sauvage.jpg",
            id: 4,
            nombre: "Dior Sauvage",
            descripcion: "Una fragancia fresca y especiada, con notas de bergamota y pimienta.",
            comentarios: [
                { usuario: "Pedro", comentario: "Lo usa todo el mundo, ya no me gusta." },
                { usuario: "Clara", comentario: "El perfume favorito de mi hermano." },
                { usuario: "Javier", comentario: "Ideal para el día a día." }
            ]
        },
        {
            imagen: "../public/images/acqua_di_gio_profumo.jpg",
            id: 5,
            nombre: "Acqua di Gio Profumo",
            descripcion: "Una fragancia acuática y amaderada, con notas de incienso y pachulí.",
            comentarios: [
                { usuario: "Santiago", comentario: "Me transporta al mar cada vez que lo uso." },
                { usuario: "Valentina", comentario: "El perfume favorito de mi papá." },
                { usuario: "Andrés", comentario: "Perfecto para el verano." }
            ]
        },
        {
            imagen: "../public/images/ysl_libre.jpg",
            id: 6,
            nombre: "Yves Saint Laurent Libre Intense",
            descripcion: "Una fragancia floral y oriental, con notas de lavanda y vainilla.",
            comentarios: [
                { usuario: "Isabella", comentario: "Mi perfume favorito, me siento poderosa." },
                { usuario: "Fernando", comentario: "Es el favorito de mi mujer." },
                { usuario: "Camila", comentario: "Elegante y sofisticado." }
            ]
        },
        {
            imagen: "../public/images/tom_ford_ombre_leather.jpg",
            id: 7,
            nombre: "Tom Ford Ombre Leather",
            descripcion: "Un perfume intenso y masculino, con notas de cuero y jazmín.",
            comentarios: [
                { usuario: "Ricardo", comentario: "Un aroma único, me encanta." },
                { usuario: "Natalia", comentario: "El perfume favorito de mi esposo." },
                { usuario: "Gonzalo", comentario: "Perfecto para ocasiones especiales." }
            ]
        },
        {
            imagen: "../public/images/valentino_BIR_intense.jpg",
            id: 8,
            nombre: "Valentino Uomo Born in Roma Intense",
            descripcion: "Una fragancia con notas de vainilla y lavanda.",
            comentarios: [
                { usuario: "Lorena", comentario: "Mi novio huele increíble con este perfume." },
                { usuario: "Matías", comentario: "Ideal para planes nocturnos." },
                { usuario: "Julieta", comentario: "Un aroma que no pasa desapercibido." }
            ]
        },
        {
            imagen: "../public/images/miss_dior.jpg",
            id: 9,
            nombre: "Miss Dior",
            descripcion: "Una fragancia floral y frutal, con notas de rosa y durazno.",
            comentarios: [
                { usuario: "Sofía", comentario: "La fragancia de las chicas." },
                { usuario: "Alejandro", comentario: "El favorito de mi novia." },
                { usuario: "Mariana", comentario: "Un aroma delicado y femenino." }
            ]
        },
        {
            imagen: "../public/images/LV_imagination.jpg",
            id: 10,
            nombre: "Louis Vuitton Imagination",
            descripcion: "Una fragancia fresca y limpia, con notas cítricas.",
            comentarios: [
                { usuario: "Laura", comentario: "Huele a recién salido de la ducha." },
                { usuario: "Carlos", comentario: "Ideal para climas cálidos." },
                { usuario: "Elena", comentario: "Un aroma refrescante y ligero." }
            ]
        }
    ]

}

module.exports = dataPerfumes;