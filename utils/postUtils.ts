import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import { IPost } from '@/types/post'
const postsDirectory = path.join(process.cwd(), 'posts', 'tech')
export const postFiles = fs.readdirSync(postsDirectory)

const projectsDirectory = path.join(process.cwd(), 'posts', 'projects')
export const projectsFiles = fs.readdirSync(projectsDirectory)

export const getAllTags = async () => {
  const tags = await Promise.all(
    postFiles.map(async (postFile) => {
      const slug = postFile.replace(/\.md$/, '')
      const noteDirectory = path.join(postsDirectory, `${slug}.md`)
      const note = fs.readFileSync(noteDirectory)

      const {
        data: { tags },
      } = matter(note)

      return tags
    }),
  )

  const tagsStore: { [key: string]: number } = {}
  tags.forEach((innerTags: any) => {
    innerTags.forEach((tag: string) => {
      tagsStore[tag] = (tagsStore[tag] || 0) + 1
    })
  })

  return tagsStore
}



export const getAllPosts = async (): Promise<IPost[]> => {
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

export const getAllProjects = async () => {
  const posts = Promise.all(
    projectsFiles.map(async (postFile) => {
      const slug = postFile.replace(/\.md$/, '')
      const posts = getProjectBySlug(slug)
      return posts
    }),
  )

  return posts
}

export const getProjectBySlug = async (slug: string) => {
  const { data, content } = readMarkdownFileTmp(slug)
  const convertedContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    ...data,
    content: convertedContent,
  }
}

export const readMarkdownFileTmp = (slug: string) => {
  const postDirectory = path.join(
    process.cwd(),
    'posts',
    'projects',
    `${slug}.md`,
  )
  const postContent = fs.readFileSync(postDirectory, 'utf-8')
  return matter(postContent)
}

export const getPostBySlug = async (
  slug: string,
  onlyParagraph = false,
): Promise<IPost> => {
  const { data, content } = readMarkdownFile(slug)
  const convertedContent = await markdownToHtml(content, onlyParagraph)

  return {
    postSlug: slug,
    ...data,
    content: convertedContent,
  }
}

export const readMarkdownFile = (slug: string) => {
  const postDirectory = path.join(process.cwd(), 'posts', 'tech', `${slug}.md`)
  const postContent = fs.readFileSync(postDirectory, 'utf-8')
  return matter(postContent)
}

export const markdownToHtml = async (
  markdownValue: string,
  onlyParagraph = false,
) => {
  const processedHTML = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize, onlyParagraph && { tagNames: ['p'] })
    .use(rehypeStringify)
    .process(markdownValue)

  return processedHTML.value
}

export const getPostsByTag = async (tag: string): Promise<IPost[]> => {
  const posts = await getAllPosts()
  const result = posts.filter((post) => post.tags?.includes(tag))
  return result
}
