const findAll = () => {
    return [{
        id: 1,
        title: 'Enlaces',
    }, {
        id: 2,
        title: 'Historias Anónimas'
    }, {
        id: 3,
        title: 'Roque Perez'
    }];
}

const findById = (id) => {
    return {
        id: id,
        title: 'Enlaces',
        description: 'Proyecto realizado para el curso de Desarrollo Creativo y Autoral de la Escuela de fotografía Motivarte coordinado por Leticia Sahagun',
        images: [{
            id: 1,
            src: 'https://images.unsplash.com/photo-1542141372-98a047557466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80'
        },{
            id: 2,
            src: 'https://images.unsplash.com/photo-1446292267125-fecb4ecbf1a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
        }]
    }
}

module.exports = {
    findAll,
    findById
}