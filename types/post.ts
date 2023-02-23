export interface IPost {
  tags?: string[]
  title: 'string'
  content: 'string'
  createdDate: 'string'
  postSlug: 'string'
  thumbnail: 'string'
  description?: 'string'
}

export type IPosts = {
  posts: IPost[]
}
