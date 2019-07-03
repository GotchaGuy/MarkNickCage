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
      y: "",
      socket: new WebSocket("ws://localhost:3000"),
      Arr: []
    }
  },
  mounted() {
    this.socket.addEventListener("open", () => {
      console.log("Connected to WebSocket");
    })
    this.socket.addEventListener("close", () => {
      console.log("Disconnected from WebSocket");
    })
    this.socket.addEventListener("message", (info) => {
      var unzip = JSON.parse(info);
        console.log('Message from the server: ', unzip);
       var img = document.getElementById("nick");
      img.style.left = unzip.x.data - 120 + "px";
      img.style.top = unzip.y.data - 175 + "px";

    })
    this.socket.addEventListener("error", function(error) {
      console.log(error);
    })
  },
  methods: {
    move: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
      this.Arr = [this.x, this.y];
      var zip = JSON.stringify(this.Arr);
      this.socket.send(zip);
     

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

  @keyframes change {
    0% {transform: rotate(0deg) translate()}
    25% {transform: rotate(45deg) translate()}
    75% {transform: rotate(-45deg) translate()}
    100% {transform: rotate(0deg) translate()}
  }

  img:hover {
    animation: change 2s 1;
  }

  

</style>
