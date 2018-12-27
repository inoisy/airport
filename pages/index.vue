<template>
  <div class="main flex">
    <h1 class="main-header text-xs-center my-auto">Шереметьево</h1>
    <div>
      <nuxt-link class="main-link mr-4" to="/tablo/arrival">Табло вылета</nuxt-link>
      <nuxt-link class="main-link" to="/tablo/departure">Табло прилета</nuxt-link>
    </div>
  </div>
</template>
<style scoped>
.main {
  background-image: url(~assets/images/bg.jpg);
  background-position: center;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 3rem;
}
.main-header {
  font-size: 5rem;
}
.main-link {
  color: white;
  font-size: 2rem;
  text-decoration: none;
}
.main-link:hover {
  color: #ffac02;
}
</style>

<script>
</script>
