const {createApp, ref} = Vue;

createApp({ 
  setup() { 
    const count = ref(0);
    const message = ref("أهلاً من Vue.js عبر CDN!");
    const context = window.__qumra__.context;

    console.log("🚀 ~ setup ~ contsext:", context)
    function increment() {
      count.value++;
    }

    return {count, message, increment};
  }
}).mount("#app");