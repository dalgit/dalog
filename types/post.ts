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

export type ITechPost = IPostt & ITechData

export type ITechPosts = ITechPost[]
