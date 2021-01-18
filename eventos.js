new Vue({
    el: '.eventos',
    data: {
        contador: 0,
        x: 0,
        y: 0,
        contador2: 0
    },
    methods: {
        sumarUno: function() {
            this.contador+=1
        },
        restarUno: function() {
            this.contador-=1
        },
        mostrarAlerta: function(mensaje) {
            alert(mensaje)
        },
        // Vue siempre recibe los eventos, por lo que aunque no se le pase ningún parámetro, este puede acceder al evento
        mostrarUbicacion: function(evento) {
            this.x = evento.clientX
            this.y = evento.clientY
        },
        sumarContador: function(valor) {
            this.contador2+=valor
        }
    }
})