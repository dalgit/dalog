export interface IProjectData {
  title: string
  createdDate: string
  thumbnail: string
  description: string
  type: string
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

export interface IProjectPost {
  title: string
  content: string
  createdDate: string
  postSlug: string
  thumbnail: string
  description: string
  type: string
}

export interface ITechPost {
  tags: string[]
  title: string
  content: string
  createdDate: string
  postSlug: string
  thumbnail: string
}
export type IProjectPosts = IProjectPost[]

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
