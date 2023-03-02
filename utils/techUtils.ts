import path from 'path'
import fs from 'fs'
import {
  readMarkdownFile,
  markdownToHtml,
  markdownToHtmlOnlyP,
  mdRemover,
} from './postUtils'

import { ITechPosts, ITechPost, ITechData } from '@/types/post'

const techDirectory = path.join(process.cwd(), 'posts', 'tech')
const techFiles = fs.readdirSync(techDirectory)

export const getAllTechs = async (): Promise<ITechPosts> => {
  const posts = await Promise.all(
    techFiles.map(async (techFile) => {
      const slug = mdRemover(techFile)
      const file = path.join(techDirectory, techFile)
      const { data, content } = readMarkdownFile(file)
      const convertedContent = await markdownToHtmlOnlyP(content)

      return {
        postSlug: slug,
        content: convertedContent,
        ...(data as ITechData),
      }
    }),
  )

  return posts
}

export const getTechBySlug = async (slug: string): Promise<ITechPost> => {
  const file = path.join(techDirectory, `${slug}.md`)
  const { data, content } = readMarkdownFile(file)
  const convertedContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    content: convertedContent,
    ...(data as ITechData),
  }
}

export const getAllTags = async (): Promise<{ [tag: string]: number }> => {
  const posts = await getAllTechs()
  const tags = posts.flatMap((post) => post.tags)

  const tagCounts = tags.reduce<{ [key: string]: number }>((counts, tag) => {
    counts[tag] = (counts[tag] || 0) + 1
    return counts
  }, {})

  return tagCounts
}

export const getPostsByTag = async (tag: string): Promise<ITechPosts> => {
  const posts = await getAllTechs()
  return posts.filter((post: ITechPost) => post.tags.includes(tag))
}

export const getSearchedPosts = async (keyword: string | undefined) => {
  if (!keyword) return []

  const posts = await getAllTechs()

  return posts.filter(
    (post: ITechPost) =>
      post.title.includes(keyword) || post.content.includes(keyword),
  )
}
