import { PageType, PagePath } from '@/constants/pageTypes'

export const getPageType = (url: string): PageType => {
  if (url === PagePath.HOME) {
    return PageType.BLOG
  }
  if (url.startsWith(PagePath.TECH)) {
    return PageType.BLOG
  }
  if (url.startsWith(PagePath.NOTE)) {
    return PageType.BLOG
  }
  if (url.startsWith(PagePath.PROJECTS)) {
    return PageType.BLOG
  }
  if (url.startsWith(PagePath.INFO)) {
    return PageType.INFO
  }
  return PageType.NONE
}
