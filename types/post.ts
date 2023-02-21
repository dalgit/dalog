export interface IPost {
  tags: string[]
  title: 'string'
  content: 'string'
  createdDate: 'string'
  postSlug: 'string'
  thumbnail: 'string'
}

export type IPosts = {
  posts: IPost[]
}
