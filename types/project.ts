import { IPostContentSlug } from './post'

export interface IProjectMatterData {
  title: string
  createdDate: string
  thumbnail: string
  description: string
  type: string
  link?: string
}

export type IProjectPost = IProjectMatterData & IPostContentSlug<string>

export interface IProjectGroupByYear {
  year: number
  posts: IProjectPosts
}

export type IProjectPosts = IProjectPost[]
