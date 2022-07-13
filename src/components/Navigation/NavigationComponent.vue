<template>
  <nav class="navigation">
    <router-link class="navigation__link" to="/">home</router-link>
    <router-link class="navigation__link" to="/costs">costs</router-link>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  height: 50px;
  width: 100%;
  padding: 10px;
  &__link {
    color: black;
    display: block;
    margin-right: 5px;
    text-transform: uppercase;
    text-decoration: none;
  }
}
</style>
