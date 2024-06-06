import type { HackerStory } from './HackerStory'

export type Story = Pick<HackerStory, 'title' | 'url' | 'time' | 'score'> & {
  authorId: string
  karma: number
  img: string
}
