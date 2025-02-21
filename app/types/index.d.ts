import type { ParsedContent } from '@nuxt/content'

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  date: string
  image?: HTMLImageElement
  badge?: Badge
  authors?: ({
    name: string
    description?: string
    avatar?: Avatar
  } & Link)[]
}

export interface Speaker {
  firstname: string
  lastname: string
  photo: string
  role: string
  company?: {
    name: string
    link: string
    logo: string
  }
  talks: number[]
  socials: Social[]
}

export interface Social {
  type: SocialType
  link: string
}

export type SocialType = 'GITHUB' | 'TWITTER' | 'BLOG' | 'LINKEDIN' | 'BLUESKY'

export interface Talk {
  id: number
  title: string
  meetup: number
  abstract: string
  replay: string
}
