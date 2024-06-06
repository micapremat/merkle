<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { HackerStory } from '@/interfaces/HackerStory'
import type { Story } from '@/interfaces/Story'
import type { Author } from '@/interfaces/Author'

const storiesIds = ref<number[]>([])
const stories = ref<Story[]>([])

const getStoriesIds = async () => {
  const response = await axios.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
  )
  storiesIds.value = response.data.slice(0, 10)
}

const getHackerStories = async () => {
  const hackerStories: HackerStory[] = await Promise.all(
    storiesIds.value.map(async (id) => {
      return (await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)).data
    })
  )
  const authors: string[] = []
  hackerStories.forEach((story) => {
    if (!authors.includes(story.by)) {
      authors.push(story.by)
    }
  })
  const authorsResponse: Author[] = await Promise.all(
    authors.map(async (author) => {
      return (await axios.get(`https://hacker-news.firebaseio.com/v0/user/${author}.json`)).data
    })
  )

  console.log(authorsResponse)

  stories.value = hackerStories.map((story) => {
    const author = authorsResponse.find((author) => story.by === author.id)
    return {
      title: story.title,
      url: story.url,
      time: story.time,
      score: story.score,
      authorId: author.id,
      karma: author.karma
    }
  })
  console.log(stories.value)
}

onMounted(async () => {
  await getStoriesIds()
  await getHackerStories()
})
</script>

<template>
  <div>
    <ul>
      <li v-for="(story, index) in stories" :key="index">
        <h2>{{ story.title }}</h2>
      </li>
    </ul>
  </div>
</template>
