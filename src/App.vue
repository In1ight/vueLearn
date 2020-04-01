<template>
  <div id="app">
    <h2>Parent: {{ carName }}</h2>
    <app-counter></app-counter>
    <app-car
      @nameChanged="carName = $event"
      :changeFunc="changeNameAudi"
      :carName="carName"
      :carYear="carYear"></app-car>
    <my-blog title="Загловок My blog"
             v-on:enlarge-text="postFontSize += 0.1"></my-blog>
    <hr>
    <my-blog
      v-for="post in posts"
      :post="post"
      v-on:enlarge-text="postFontSize += 0.1"
    > </my-blog>
  </div>
</template>

<script>
    import Car from './Car.vue'
    import Counter from './Counter.vue'


    export default {
        name: 'app',

        data() {
            return {
                carName: 'Ford ',
                carYear: 1995,
                posts: [
                    {id: 1333, title: 'My journey with Vue' , cat: 1},
                    {id: 2, title: 'Blogging with Vue'},
                    {id: 3, title: 'Why Vue is so fun'}
                ]
            }
        },
        methods: {
            changeNameAudi() {
                this.carName = 'Audi'
            }
        },
        components: {
            appCar: Car,
            appCounter: Counter
        }
    }
</script>
<style>
  .app {
    border: 1px solid black;
    color: red;
  }
</style>
