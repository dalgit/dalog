import { PageType, BlogType } from './pageTypes'

export const MAIN_MENUS = [
  { id: 1, name: 'Blog', path: '/', type: PageType.BLOG },
  { id: 2, name: 'Info', path: '/info', type: PageType.INFO },
]

export const BLOG_NAVIGATION_MENUS = [
  { id: 1, name: 'Tech', path: '/', type: BlogType.TECH },
  { id: 2, name: 'Proj', path: '/projects', type: BlogType.PROJECTS },
  { id: 3, name: 'Note', path: '/note/site/design', type: BlogType.NOTE },
]
