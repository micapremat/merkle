<script setup lang="ts"></script>

<template>
  <nav>
    <h1 aria-labelledby="main-title" id="main-title">Hacker News stories</h1>
  </nav>
</template>

<style scoped lang="scss">
$primary-color: #071354;
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
#title {
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 6px;
  color: $primary-color;
}
nav {
  text-align: center;
}
</style>
