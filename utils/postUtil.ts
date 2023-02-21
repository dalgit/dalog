import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'posts')
export const postFiles = fs.readdirSync(postsDirectory)

export const getAllPosts = async () => {
  const onlyParagraph = true

  const posts = Promise.all(
    postFiles.map(async (postFile) => {
      const slug = postFile.replace(/\.md$/, '')
      const posts = getPostBySlug(slug, onlyParagraph)
      return posts
    }),
  )

  return posts
}

export const getPostBySlug = async (slug: string, onlyParagraph = false) => {
  const { data, content } = readMarkdownFile(slug)
  const convertedContent = await markdownToHtml(content, onlyParagraph)

  return {
    postSlug: slug,
    ...data,
    content: convertedContent,
  }
}

const readMarkdownFile = (slug: string) => {
  const postDirectory = path.join(process.cwd(), 'posts', `${slug}.md`)
  const postContent = fs.readFileSync(postDirectory, 'utf-8')
  return matter(postContent)
}

const markdownToHtml = async (markdownValue: string, onlyParagraph = false) => {
  const processedHTML = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize, onlyParagraph && { tagNames: ['p'] })
    .use(rehypeStringify)
    .process(markdownValue)

  return processedHTML.value
}
