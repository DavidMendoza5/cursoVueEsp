let app = new Vue({
    el: '#app',
    data: {
        titulo: "Lista de tareas",
        nuevaTarea: '',
        tareas: [
            {
                texto: 'Aprender VueJs',
                terminada: false
            },
            {
                texto: 'Aprender NodeJs',
                terminada: false
            },
            {
                texto: 'Aprender ReactJs',
                terminada: false
            }
            
        ]
    },
    methods: {
        agregarTarea: function() {
            // El método trim() elimina espacios al inicio y al final de una cadena
            if(this.nuevaTarea.trim()) {
                let tarea = {
                    texto: this.nuevaTarea.trim(),
                    terminada: false
                }
                this.tareas.push(tarea)
            }
            this.nuevaTarea = ''
        },
        eliminarTarea: function(tarea) {
            let indice = this.tareas.indexOf(tarea)
            // El splice elimina el elemento que se encuentra en el índice indicado y el segundo parámetro es para indicar cuántos elementos se van a eliminar
            this.tareas.splice(indice,1)
        }
    }
})