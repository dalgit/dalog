import { IPostContentSlug } from './post'

export interface ITechPostMatterData {
  tags: string[]
  title: string
  createdDate: string
  thumbnail: string
}

export type ITechPost = ITechPostMatterData & IPostContentSlug<string>

export type ITechPosts = ITechPost[]

export interface ITags {
  [tag: string]: number
}
