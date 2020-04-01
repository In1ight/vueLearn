<template>
  <div class="app">
    <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
    <h3>Year: {{ carYear }}</h3>
    <button @click="changeName()">Сменить имя</button>
    <button @click="changeFunc">Сменить имя из родителя</button>
    <button @click="updateCounter()">Counter+</button>
  </div>
</template>

<script>
    import {eventEmitter} from './main.js'

    export default {
        //props:['carName', 'carYear'],
        props: {
            carName: {
                type: String,
                default: 'Default name'
            },
            carYear: Number,
            changeFunc: Function
        },
        computed: {
            reverseName() {
                return this.carName.split('').reverse().join('')
            }
        },
        methods: {
            updateCounter() {
                eventEmitter.$emit('counterUpdated')
            },
            changeName() {
                this.carName = 'Opel'
                this.$emit('nameChanged', this.carName)
            }
        }

    }
</script>
