<template>
  <div id="app">
   <section @click="move" >
    <img id="nick" src="./assets/nick.png" alt="Nick">

   </section>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
      x: "",
      y: ""
    }
  },
  methods: {
    move: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
      console.log(this.x , this.y);
      var img = document.getElementById("nick");
      img.style.left = this.x;
      img.style.top = this.y;

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
section {
  height: 100vh;
}
 img {
   height: 350px;
   width: auto;
   position: absolute;
 }
  img:hover {
    rotate: 45deg;
  }

</style>
