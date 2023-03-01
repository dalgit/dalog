import path from 'path'
import fs from 'fs'
import { readMarkdownFile } from './postUtils'
import { markdownToHtml } from './postUtils'
import { mdRemover } from './common'

const projectsDirectory = path.join(process.cwd(), 'posts', 'projects')
const projectsFiles = fs.readdirSync(projectsDirectory)

export const getAllProjects = async () => {
  const posts = Promise.all(
    projectsFiles.map(async (postFile) => {
      const slug = mdRemover(postFile)
      const posts = getProjectBySlug(slug)
      return posts
    }),
  )

  return posts
}

export const getProjectBySlug = async (slug: string) => {
  const file = path.join(projectsDirectory, `${slug}.md`)
  const { data, content } = readMarkdownFile(file)
  const convertedContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    ...data,
    content: convertedContent,
  }
}
