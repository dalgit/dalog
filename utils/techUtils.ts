import path from 'path'
import fs from 'fs'
import { readMarkdownFile } from './postUtils'
import { markdownToHtml } from './postUtils'
import { markdownToHtmlOnlyP } from './postUtils'
import { mdRemover } from './common'

const techDirectory = path.join(process.cwd(), 'posts', 'tech')
const techFiles = fs.readdirSync(techDirectory)

interface IPost {
  tags: string[]
  title: string
  content: string
  createdDate: string
  postSlug: string
  thumbnail: string
}

export const getAllTechs = async (): Promise<IPost[]> => {
  const posts: any = Promise.all(
    techFiles.map(async (techFile) => {
      const slug = mdRemover(techFile)
      const file = path.join(techDirectory, techFile)
      const { data, content } = readMarkdownFile(file)
      const convertedContent = await markdownToHtmlOnlyP(content)

      return {
        postSlug: slug,
        ...data,
        content: convertedContent,
      }
    }),
  )

  return posts
}

export const getTechBySlug = async (slug: string) => {
  const file = path.join(techDirectory, `${slug}.md`)
  const { data, content } = readMarkdownFile(file)
  const convertedContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    ...data,
    content: convertedContent,
  }
}

const techs = getAllTechs()

export const getAllTags = async () => {
  const tagsStore: { [key: string]: number } = {}
  const a = await techs
  a.forEach((techPost: any) => {
    techPost.tags.forEach((tag: string) => {
      tagsStore[tag] = (tagsStore[tag] || 0) + 1
    })
  })

  return tagsStore
}

export const getPostsByTag = async (tag: string): Promise<IPost[]> => {
  const posts = await techs
  const result = posts.filter((post) => post.tags?.includes(tag))
  return result
}
