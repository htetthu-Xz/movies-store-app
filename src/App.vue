<template>
  <Navigation />
    <RouterView />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue';
  
export default{
  components: {
    Footer,
    Navigation
  }
}
</script>

