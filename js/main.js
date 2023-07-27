const { createApp } = Vue

createApp({
    data() {
        return {
            controlledId: 3,
            niente: true,
            nienteDaFare : true,
            todolistFiltred:[],
            myTodo: {
                text: '',
                id: '',
                succes: null
            },
            todolist: [
                {
                    text: 'Avere abbastanza soldi da potersi permettere una Pagani',
                    id: 1, succes: null
                },
                {
                    text: 'Ferie',
                    id: 2,
                    succes: null
                },
                {
                    text: 'Troavre lavoro',
                    id: 3,
                    succes: null
                }
            ]
        }


    },
    methods: {
        append() {
            const newTodo = { ...this.myTodo }
            this.controlledId++
            newTodo.id = this.controlledId
            this.todolist.push(newTodo)
            this.myTodo = {}
        },
        itemComplete(index) {
            let found = this.todolist.find(e => e.id === index);
            found.succes = true

        },
        restart(index) {
            let foundR = this.todolist.find(e => e.id === index);
            if (foundR.succes === true) {
                console.log('cuiao')
            }
            if (foundR.succes === false) {
                console.log('hey')
            }

        },
        deleteItem(item) {
            if (item.succes != true) {
                alert('hey non lo hai completato')
            }
            let itemindex = this.todolist.findIndex((elemnt)=> elemnt.id === item.id)            // this.controlledId--I
            this.todolist.splice(itemindex, 1)


        },
        showSucces() {
            let verify =true
            const newList = []
            this.todolist.forEach(element => {
                if (element.succes === true) {
                    newList.push(element)
                }
            });
            if (newList.length === 0) {
                verify = false
            }
            this.niente = verify
            this.todolist = []
            this.todolist = newList
        },
        showDoList() {
            verify = true
            const newList = []
            this.todolist.forEach(element => {
                if (element.succes != true) {
                    newList.push(element)
                }
            });
            if (newList.length === 0) {
                verify = false
            }
            this.nienteDaFare = verify
            this.todolist = []
            this.todolist = newList
        }
    }
}).mount('#app')