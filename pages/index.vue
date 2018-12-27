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
  padding: 24px;
}
.main-header {
  font-size: calc(45 * 1px + (260 - 45) * (100vw - 320 * 1px) / (1920 - 20));
}
.main-link {
  color: white;
  font-size: 2rem;
  text-decoration: none;
}
.main-link:hover {
  color: #ffac02;
}
@media (min-width: 600px) {
  .main {
    padding: 56px;
  }
}
@media (min-width: 960px) {
  .main {
    padding: 90px;
  }
}
</style>

<script>
</script>
