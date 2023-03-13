export interface INoteMatterData {
  title: string
  createdDate: string
}

export interface INote {
  postSlug: [string, string]
  content: string
  title: string
  createdDate: string
}

export interface INoteCategory {
  name: string
  topics: Topics
}

export interface Topic {
  slug: string
  title: string
}

export type INoteCategories = INoteCategory[]

export type Topics = Topic[]
