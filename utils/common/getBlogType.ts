import { BlogType, PagePath } from '@/constants/pageTypes'

export const getBlogType = (url: string): BlogType => {
  if (url === PagePath.HOME) {
    return BlogType.TECH
  }
  if (url.startsWith(PagePath.TECH)) {
    return BlogType.TECH
  }
  if (url.startsWith(PagePath.SEARCH)) {
    return BlogType.TECH
  }
  if (url.startsWith(PagePath.PROJECTS)) {
    return BlogType.PROJECTS
  }
  if (url.startsWith(PagePath.NOTE)) {
    return BlogType.NOTE
  }

  return BlogType.NONE
}
