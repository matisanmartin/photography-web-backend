const about = () => {
    return {
        name: 'Matias San Martin Acosta',
        email: 'msanmartinacosta@gmail.com',
        description: 'Photographer from Argentina',
        longDescription: 'Born February 15, 1989. Working as a software developer',
        profilePicture: 'https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/38391326_593324981061649_3103072764228009984_n.jpg?_nc_cat=103&_nc_oc=AQmQuwX-hloO7yz1vrmI4onvv-UNxXqJSPSYup2J3b8ppm3GYz4VpgHdi2Yno42C2gA&_nc_ht=scontent.faep9-1.fna&oh=5ad1f3cfc9cb0d68a50492143ce19309&oe=5D817D82',
        links: [{
            thumbnail: 'linkedin',
            link: 'http://linkedin.com/in/msanmartinacosta'
        }],
        courses: [{
            school: 'Motivarte',
            name: 'Curso Básico Integral',
            professors: 'Sol Mendoza'
        }, {
            school: 'Motivarte',
            name: 'Taller de Entrenamiento Visual',
            professors: 'Laura Passoti & Sergio Otaño'
        }, {
            school: 'Motivarte',
            name: 'Iluminación',
            professors: 'Anabella Reggiani & Martín Mercado'
        }, {
            school: 'Motivarte',
            name: 'Taller de Desarrollo Creativo y Autoral',
            professors: 'Leticia Sahagun'
        }, {
            school: 'Motivarte',
            name: 'Lenguajes Combinados',
            professors: 'Leticia Sahagun'
        }, {
            school: '',
            name: 'Taller de desarrollo de proyecto',
            professors: 'Leticia Sahagun'
        }, {
            school: 'Santa Talleres',
            name: 'Fotografía Analógica',
            professors: 'Iara Kremer'
        }, {
            school: 'Santa Talleres',
            name: 'Mirar, Editar, Contar',
            professors: 'Iara Kremer'
        }, {
            school: 'Santa Talleres',
            name: 'Colorimetría en Camera RAW',
            professors: 'Ignacio Steinsleger'
        }, {
            school: 'Santa Tallers',
            name: 'Creadores de Imágenes',
            professors: 'Julia Sbriller'
        }, {
            school: 'Santa Talleres',
            name: 'Gracias por tanto, Photoshop',
            professors: 'Julieta Pestarino'
        }],
        mentions: [{
            event: 'Muestra Cursos TFP 1°C 2017',
            description: 'Ganador de media beca por muestra final de Curso de Iluminación'
        }, {
            event: 'Muestra Cursos TFP 2°C 2017',
            description: 'Ganador de media beca por muestra final de Curso de Desarrollo Creativo y Autoral'
        }]
    }
}

module.exports = {
    about
}