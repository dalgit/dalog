import path from 'path'
import fs from 'fs'
import { readMarkdownFile, markdownToHtml, mdRemover } from './postUtils'
import {
  IProjectPosts,
  IProjectPost,
  IProjectMatterData,
  IPostGroupByYear,
} from '@/types/post'

const projectsDirectory = path.join(process.cwd(), 'posts', 'projects')
const projectsFiles = fs.readdirSync(projectsDirectory)

export const projectSlugs = projectsFiles.map(mdRemover)

export const getAllProjects = async (): Promise<IProjectPosts> => {
  return await Promise.all(projectSlugs.map(getProjectBySlug))
}

export const getPostsGroupedByYear = (
  posts: IProjectPosts,
): IPostGroupByYear[] =>
  posts.reduce((postsGroup: IPostGroupByYear[], post: IProjectPost) => {
    const year = new Date(post.createdDate).getFullYear()
    const yearRef = postsGroup.find((group) => group.year === year)

    if (yearRef) {
      yearRef.posts.push(post)
    } else {
      postsGroup.push({ year, posts: [post] })
    }
    postsGroup.sort((a, b) => b.year - a.year)
    return postsGroup
  }, [])

export const getProjectBySlug = async (slug: string): Promise<IProjectPost> => {
  const filePath = path.join(projectsDirectory, `${slug}.md`)
  const { data, content } = await readMarkdownFile(filePath)
  const htmlContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    content: htmlContent,
    ...(data as IProjectMatterData),
  }
}
