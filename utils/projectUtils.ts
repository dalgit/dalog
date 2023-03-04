import path from 'path'
import fs from 'fs'
import { readMarkdownFile, markdownToHtml, mdRemover } from './postUtils'
import { IProjectPosts, IProjectPost, IProjectData } from '@/types/post'

const projectsDirectory = path.join(process.cwd(), 'posts', 'projects')
const projectsFiles = fs.readdirSync(projectsDirectory)

export const projectSlugs = projectsFiles.map(mdRemover)

export const getAllProjects = async (): Promise<IProjectPosts> => {
  return await Promise.all(projectSlugs.map(getProjectBySlug))
}

export const getProjectBySlug = async (slug: string): Promise<IProjectPost> => {
  const filePath = path.join(projectsDirectory, `${slug}.md`)
  const { data, content } = await readMarkdownFile(filePath)
  const htmlContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    content: htmlContent,
    ...(data as IProjectData),
  }
}
