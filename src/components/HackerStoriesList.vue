<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { HackerStory } from '@/types/HackerStory'
import type { Story } from '@/types/Story'
import type { Author } from '@/types/Author'
import HackerStoriesItem from './HackerStoriesItem.vue'

const storiesIds = ref<number[]>([])
const stories = ref<Story[]>([])
const order = ref<boolean>(true)
const loading = ref<boolean>(true)

//get first 10 stories ids
const getStoriesIds = async () => {
  const response = await axios.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
  )
  storiesIds.value = response.data.slice(0, 10)
}

const getHackerStories = async () => {
  //get stories by id
  const hackerStories: HackerStory[] = await Promise.all(
    storiesIds.value.map(async (id) => {
      return (await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)).data
    })
  )
  //get authors from stories - remove duplicates
  const authors: string[] = []
  hackerStories.forEach((story) => {
    if (!authors.includes(story.by)) {
      authors.push(story.by)
    }
  })

  //get authors
  const authorsResponse: Author[] = await Promise.all(
    authors.map(async (author) => {
      return (await axios.get(`https://hacker-news.firebaseio.com/v0/user/${author}.json`)).data
    })
  )

  // object for display data with stories and author data
  stories.value = hackerStories.map((story, index) => {
    const author = authorsResponse.find((author) => story.by === author.id)!
    return {
      title: story.title,
      url: story.url,
      time: story.time,
      score: story.score,
      authorId: author.id,
      karma: author.karma,
      img: `/imgs/hacker${index + 1}.png`
    }
  })
  loading.value = !loading.value
  orderByScore(true)
}

const orderByScore = (orderby: boolean) => {
  if (orderby) {
    stories.value.sort((a, b) => a.score - b.score)
  } else {
    stories.value.sort((a, b) => b.score - a.score)
  }
  order.value = !order.value
}

onMounted(async () => {
  await getStoriesIds()
  await getHackerStories()
})
</script>

<template>
  <div class="list-wrapper">
    <button class="btn" ref="orderButton" @click="orderByScore(order)">Sort</button>
    <img src="/imgs/loading-buffering.gif" alt="loading" class="loading-img" v-if="loading" />
    <ul>
      <li v-for="(story, index) in stories" :key="index">
        <HackerStoriesItem :story="story" />
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
$primary-color: #071354;
.list-wrapper {
  text-align: center;
}
ul {
  li {
    list-style: none;
  }
}
.btn {
  margin: 15px;
  background-color: transparent;
  border: $primary-color 1px solid;
  font-size: 14px;
  border-radius: 8px;
  padding: 5px 15px;
  color: $primary-color;
  font-weight: 600;
}
.btn:hover {
  background-color: azure;
  cursor: pointer;
}
.loading-img {
  width: 50px;
  display: block;
  margin: 0 auto;
}
</style>
