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
  firstname: string;
  lastname: string;
  photo: string;
  role: string;
  company: {
    name: string, link: string
  }
  talk: {
    title: string,
    edition: number,
    replay: string
  },
  socials: Socials[]
}

export interface Social {
  type: SocialType,
  link: string
}

export type SocialType = "GITHUB" | "TWITTER" | "BLOG" | "LINKEDIN" | "BLUESKY"