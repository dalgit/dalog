import { IPostContentSlug } from './post'

export interface INoteMatterData {
  title: string
  createdDate: string
}

export type INoteSlug = [string, string]

export type INote = INoteMatterData & IPostContentSlug<INoteSlug>

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
