export interface IProjectMatterData {
  title: string
  createdDate: string
  thumbnail: string
  description: string
  type: string
}

export interface IProjectPost {
  title: string
  content: string
  createdDate: string
  postSlug: string
  thumbnail: string
  description: string
  type: string
}

export interface IPostGroupByYear {
  year: number
  posts: IProjectPosts
}

export type IProjectPosts = IProjectPost[]
