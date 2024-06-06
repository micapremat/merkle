<script setup lang="ts">
import type { Story } from '@/types/Story'
import { type PropType } from 'vue'

defineProps({
  story: Object as PropType<Story>
})
const formattedTime = (date: number) => {
  return new Date(date * 1000).toLocaleDateString()
}
</script>

<template>
  <div class="item-wrapper">
    <div class="item-content">
      <div class="img-content">
        <img :src="story?.img" alt="" />
      </div>
      <div class="story-content">
        <h2>{{ story?.title }}</h2>
        <p class="url">
          <a target="_blank" :href="story?.url">{{ story?.url }}</a>
        </p>
        <div class="item-content item-content-row">
          <p>{{ formattedTime(story?.time!) }}</p>
          <p><span class="title-bold">Score: </span> {{ story?.score }}</p>
        </div>
      </div>
      <div class="author-content">
        <p>{{ story?.authorId }}</p>
        <p><span class="title-bold">Karma: </span> {{ story?.karma }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
$primary-color: #071354;
$secondary-color: #2b9c4d;
$terciary-color: #0a4849;
.item-wrapper {
  display: flex;
  margin: 20px 0px;
  justify-content: space-between;
  border: $primary-color 2px solid;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: left;
}
.item-content {
  display: flex;
  flex-direction: row;
  flex: 1;
}
.item-content-row {
  p {
    margin: 10px 20px 0 0;
  }
}
.title-bold {
  font-weight: bold;
}
.img-content {
  display: flex;
  border-right: $primary-color 1px solid;
}
.author-content {
  display: flex;
  flex-direction: column;
  text-align: right;
}
img {
  width: 100px;
  height: 100px;
  margin-right: 15px;
}
h2 {
  font-size: 20px;
  font-weight: bold;
}
a {
  color: black;
  font-size: 16px;
  color: $terciary-color;
  font-weight: 600;
  word-break: break-word;
}
a:hover {
  background-color: transparent;
  color: $secondary-color;
}
.story-content {
  margin: 0px 20px;
  width: 80%;
  p {
    word-wrap: break-word;
  }
}
@media screen and (max-width: 820px) {
  .item-wrapper {
    display: block;
  }
  .story-content {
    width: 100%;
    padding: 0 15px;
  }
}
@media screen and (max-width: 820px) {
  .item-content {
    flex-direction: column;
    justify-content: center;
  }
  .img-content {
    justify-content: center;
    border-bottom: $primary-color 1px solid;
    border-right: none;
  }
  h2 {
    text-align: center;
  }
  .url {
    text-align: center;
  }
  .item-content-row {
    flex-direction: row;
  }
  .author-content {
    justify-content: center;
    text-align: center;
    margin: 0;
  }
}
@media screen and (max-width: 450px) {
  .item-wrapper {
    padding: 10px;
  }
  .story-content {
    padding: 0px;
    margin: 0px;
  }
}
</style>
