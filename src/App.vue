<template>
  <div id="app">
    <div class="row mt-5">
      <div class="offset-3 col-md-6 align-items-center">
        <Header/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header';

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>
