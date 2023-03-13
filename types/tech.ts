export interface ITechPostMatterData {
  tags: string[]
  title: string
  createdDate: string
  thumbnail: string
}

export interface ITechPost {
  tags: string[]
  title: string
  content: string
  createdDate: string
  postSlug: string
  thumbnail: string
}

export type ITechPosts = ITechPost[]
