let data = {
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
}

// El primer parámetro hace referencia al nombre del componente
Vue.component('titulo', {
    // Indica el HTML que se va a insertar en el componente titulo
    template: '<h2>{{ titulo }}</h2>',
    // En los componentes el data se debe declarar como una función y no como un objeto
    data: function() {
        return { titulo: "Lista de tareas" }
    }
})

Vue.component('nueva-tarea', {
    data: function() {
        return data
    },
    template: `
            <div class="input-group">
                <input type="text" placeholder="Escribe una nueva tarea" v-model="nuevaTarea" class="form-control" @keyup.enter="agregarTarea">
                <span class="input-group-btn">
                    <button @click="agregarTarea" class="btn btn-primary">Agregar tarea</button>
                </span>
            </div>
            `,
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
        }
    }
})

Vue.component('lista-de-tareas', {
    data: function() {
        return data
    },
    template: `
            <ul class="list-group">
                <li v-for="tarea in tareas" class="list-group-item" v-bind:class="{terminada: tarea.terminada}">
                    {{ tarea.texto }}
                    <span class="pull-right">
                        <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok" 
                            @click="tarea.terminada = !tarea.terminada">Terminar</button>
                    </span>
                    <span class="pull-right">
                        <button type="button" class="btn btn-danger btn-xs glyphicon glyphicon-ok" 
                            @click="eliminarTarea(tarea)">Borrar</button>
                    </span>
                </li>
            </ul>
            `,
    methods: {
        eliminarTarea: function(tarea) {
            let indice = this.tareas.indexOf(tarea)
            // El splice elimina el elemento que se encuentra en el índice indicado y el segundo parámetro es para indicar cuántos elementos se van a eliminar
            this.tareas.splice(indice,1)
        }
    }
})

let app = new Vue({
    el: '#app',
    data: data
})