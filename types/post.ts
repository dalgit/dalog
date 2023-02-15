export interface IPost {
  tags: string[]
  title: 'string'
  content: 'string'
  createdDate: 'string'
}

export type IPosts = {
  posts: IPost[]
}
