export interface IPost {
  tags?: string[]
  title: string
  content: string
  createdDate: string
  postSlug: string
  thumbnail: string
  description?: string
}

export type IPosts = {
  posts: IPost[]
}

interface IPostt {
  postSlug: string
  content: string
}

export interface ITechData {
  tags: string[]
  title: string
  createdDate: string
  thumbnail: string
}

export interface INoteData {
  title: string
  createdDate: string
}
export interface INote {
  postSlug: [string, string]
  content: string
  title: string
  createdDate: string
}

export type ITechPosts = ITechPost[]

export interface Topic {
  slug: string
  title: string
}

export interface INoteCategory {
  name: string
  topics: Topics
}

export type Topics = Topic[]

export type INoteCategories = INoteCategory[]
