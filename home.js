const app = new Vue({
    el: '.vue',
    data: {
        mensaje: 'Aprende VueJs',
        mensaje2: 'Hola desde mensaje',
        src: 'https://vuejs.org/images/logo.png',
        primero: 0,
        segundo: 0,
        tercero: 0,
        cuarto: 0,
        nombre: 'David'
    },
    methods: {
        mostrarMensaje: () => {
            return 'Aprende Vue desde una función'
        },
        mostrarMensaje2: function () {
            return this.mensaje2 // De esta forma accedemos a las variables que se encuentran en data
        }
    },
    computed: { // La propiedades computed son actualizadas actumáticamente cuando cambia alguno de los valores que tiene
        total: function () {
            return this.primero + this.segundo + this.tercero + this.cuarto
        }
    }
})