import { IProjectPost } from '@/types/project'
import { ITechPost } from '@/types/tech'

export const getIsProject = (
  post: IProjectPost | ITechPost,
): post is IProjectPost => {
  return (post as IProjectPost).description !== undefined
}

export const getIsTech = (
  post: IProjectPost | ITechPost,
): post is ITechPost => {
  return (post as ITechPost).tags !== undefined
}
