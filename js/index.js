const peliculas = [
    {
        id: 1,
        titulo: "Oppenheimer",
        anio: 2023,
        genero: "Drama",
        director: "Christopher Nolan",
        puntuacion: 8.9,
        duracion: "3h 00m",
        calidad: "4K HDR",
        formato: "70MM IMAX",
        imagen: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
    },
    {
        id: 2,
        titulo: "Duna: Parte Dos",
        anio: 2024,
        genero: "Ciencia ficción",
        director: "Denis Villeneuve",
        puntuacion: 8.5,
        duracion: "2h 46m",
        calidad: "4K HDR",
        formato: "IMAX",
        imagen: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    },
    {
        id: 3,
        titulo: "Barbie",
        anio: 2023,
        genero: "Comedia",
        director: "Greta Gerwig",
        puntuacion: 6.8,
        duracion: "1h 54m",
        calidad: "4K HDR",
        formato: "Dolby Vision",
        imagen: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    },
    {
        id: 4,
        titulo: "The Batman",
        anio: 2022,
        genero: "Acción",
        director: "Matt Reeves",
        puntuacion: 7.8,
        duracion: "2h 56m",
        calidad: "4K HDR",
        formato: "IMAX",
        imagen: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
    {
        id: 5,
        titulo: "Avatar: El sentido del agua",
        anio: 2022,
        genero: "Ciencia ficción",
        director: "James Cameron",
        puntuacion: 7.6,
        duracion: "3h 12m",
        calidad: "4K HDR",
        formato: "3D IMAX",
        imagen: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    },
    {
        id: 6,
        titulo: "John Wick 4",
        anio: 2023,
        genero: "Acción",
        director: "Chad Stahelski",
        puntuacion: 7.6,
        duracion: "2h 49m",
        calidad: "4K HDR",
        formato: "Dolby Vision",
        imagen: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    },
    {
        id: 7,
        titulo: "Gladiador II",
        anio: 2024,
        genero: "Acción",
        director: "Ridley Scott",
        puntuacion: 6.8,
        duracion: "2h 28m",
        calidad: "4K HDR",
        formato: "IMAX",
        imagen: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
    },
    {
        id: 8,
        titulo: "Pobres criaturas",
        anio: 2023,
        genero: "Ciencia ficción",
        director: "Yorgos Lanthimos",
        puntuacion: 7.8,
        duracion: "2h 21m",
        calidad: "4K HDR",
        formato: "Dolby Vision",
        imagen: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    },
    {
        id: 9,
        titulo: "Robot salvaje",
        anio: 2024,
        genero: "Animación",
        director: "Chris Sanders",
        puntuacion: 8.2,
        duracion: "1h 42m",
        calidad: "4K HDR",
        formato: "Dolby Vision",
        imagen: "https://image.tmdb.org/t/p/w500/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg"
    },
    {
        id: 10,
        titulo: "Superman",
        anio: 2025,
        genero: "Acción",
        director: "James Gunn",
        puntuacion: 7.3,
        duracion: "2h 09m",
        calidad: "4K HDR",
        formato: "IMAX",
        imagen: "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
    },
]


document.addEventListener('DOMContentLoaded', () => {
    const moviesList = document.getElementById("lista-peliculas")
    peliculas.forEach(pelicula => {
        let card = `<div class="col">
                        <article class="card border-0 rounded-3 overflow-hidden h-100 p-0">

                            <div class="position-relative">
                                <img src="${pelicula.imagen}"
                                    class="card-img-top" alt="${pelicula.titulo}">

                                <span class="badge bg-dark position-absolute top-0 start-0 m-2">
                                    ${pelicula.calidad}
                                </span>

                                <button
                                    class="btn btn-secondary btn-sm rounded-circle position-absolute top-0 end-0 m-2"
                                    type="button" title="Guardar en favoritos">
                                    <i class="bi bi-heart"></i>
                                </button>

                                <div
                                    class="position-absolute bottom-0 start-0 end-0 d-flex justify-content-between p-2">
                                    <span class="text-warning fw-bold">
                                        <i class="bi bi-star-fill"></i> ${pelicula.puntuacion}
                                    </span>

                                    <span class="badge bg-dark">
                                        ${pelicula.duracion}
                                    </span>
                                </div>
                            </div>

                            <div class="card-body d-flex flex-column">

                                <div class="d-flex align-items-center gap-2 mb-2">
                                    <small class="text-muted">2023</small>
                                    <span class="badge cv-badge-primary">${pelicula.genero}</span>
                                </div>

                                <h5 class="card-title text-truncate">
                                    ${pelicula.titulo}
                                </h5>

                                <p class="card-text text-muted small text-truncate">
                                    ${pelicula.director}
                                </p>

                                <div class="d-flex justify-content-between align-items-center mt-auto">
                                    <small class="text-warning fw-semibold">
                                        ${pelicula.formato}
                                    </small>

                                    <a href="#" class="text-danger text-decoration-none fw-semibold">
                                        Ficha <i class="bi bi-chevron-right"></i>
                                    </a>
                                </div>

                            </div>

                        </article>
                    </div>`
        moviesList.innerHTML += card
    })
})