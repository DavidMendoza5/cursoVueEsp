const app = new Vue({
    el: '.vue',
    data: {
        imagen: 'https://vuejs.org/images/logo.png',
        texto: 'Hola mundo',
        texto2: '<em>Hola desde v-html</em>',
        mostrar: false,
        mostrar2: false,
        paises: ['México', 'Canadá', 'Inglaterra'],
        paises2: [
            {
                nombre: 'Alemania',
                Continente: 'Europa'
            },
            {
                nombre: 'Francia',
                Continente: 'Europa'
            },
            {
                nombre: 'España',
                Continente: 'Europa'
            }
        ],
        objeto: {
            nombre: 'David',
            edad: '21',
            profesion: 'ISC'
        }
    }
})