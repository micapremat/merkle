<script setup lang="ts">
import type { Story } from '@/interfaces/Story'
import { ref, onMounted, type PropType } from 'vue'

const props = defineProps({
  story: Object as PropType<Story>
})
const formattedTime = (date: number) => {
  return new Date(date * 1000).toLocaleDateString()
}

onMounted(() => {
  console.log(props.story)
})
</script>

<template>
  <div>
    <div>
      <img :src="story?.img" :alt="story?.img" />
      <h2>{{ story?.title }}</h2>
      <a :href="story?.url">{{ story?.url }}</a>
      <p>{{ formattedTime(story?.time!) }}</p>
      <p>{{ story?.score }}</p>
    </div>
    <div>
      <p>{{ story?.authorId }}</p>
      <p>{{ story?.karma }}</p>
    </div>
  </div>
</template>
