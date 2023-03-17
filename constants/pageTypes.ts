export enum PagePath {
  HOME = '/',
  TECH = '/tech',
  NOTE = '/note',
  PROJECTS = '/projects',
  SEARCH = '/search',
  INFO = '/info',
}

export enum BlogType {
  TECH = 'tech',
  NOTE = 'note',
  PROJECTS = 'projects',

  NONE = '',
}

export enum PageType {
  BLOG = 'blog',
  INFO = 'info',

  NONE = '',
}

export enum RenderType {
  SERVER_SIDE_RENDERING = 'server-side-rendering',
  CLIENT_SIDE_RENDERING = 'client-side-rendering',
  STATIC_SITE_GENERATION = 'static site-generation',
}

export const PAGE_RENDER_TYPES: { [key: string]: RenderType } = {
  [PagePath.HOME]: RenderType.STATIC_SITE_GENERATION,
  [PagePath.TECH]: RenderType.STATIC_SITE_GENERATION,
  [PagePath.NOTE]: RenderType.STATIC_SITE_GENERATION,
  [PagePath.PROJECTS]: RenderType.STATIC_SITE_GENERATION,
  [PagePath.SEARCH]: RenderType.SERVER_SIDE_RENDERING,
  [PagePath.INFO]: RenderType.STATIC_SITE_GENERATION,
}
