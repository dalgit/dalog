import fs from 'fs/promises'
import path from 'path'
import {
  readMarkdownFile,
  markdownToHtml,
  markdownToHtmlOnlyP,
  mdRemover,
} from './postUtils'
import { ITechPosts, ITechPost, ITechPostMatterData } from '@/types/tech'

const techDirectory = path.join(process.cwd(), 'posts', 'tech')

export const getTechSlugs = async () => {
  const techs = await getAllTechs()
  return techs.map((tech) => tech.postSlug)
}

export const getAllTechs = async (): Promise<ITechPosts> => {
  const techFiles = await fs.readdir(techDirectory)

  const posts = await Promise.all(
    techFiles.map(async (file) => {
      const slug = mdRemover(file)
      const techPath = path.join(techDirectory, file)
      const { data, content } = await readMarkdownFile(techPath)
      const htmlContent = await markdownToHtmlOnlyP(content)

      return {
        postSlug: slug,
        content: htmlContent,
        ...(data as ITechPostMatterData),
      }
    }),
  )

  return posts
}

export const getTechBySlug = async (slug: string): Promise<ITechPost> => {
  const techPath = path.join(techDirectory, `${slug}.md`)
  const { data, content } = await readMarkdownFile(techPath)
  const htmlContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    content: htmlContent,
    ...(data as ITechPostMatterData),
  }
}

export const getAllTagSlugs = async () => {
  const posts = await getAllTechs()
  const tags = posts.flatMap((post) => post.tags)
  return tags
}

export const getAllTags = async (): Promise<{ [tag: string]: number }> => {
  const posts = await getAllTechs()
  const tags = posts.flatMap((post) => post.tags)
  const tagCounts = tags.reduce<{ [tag: string]: number }>((counts, tag) => {
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
