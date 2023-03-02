import fs from 'fs'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export const readMarkdownFile = (file: string) => {
  const postContent = fs.readFileSync(file, 'utf-8')
  return matter(postContent)
}

export const markdownToHtml = async (markdownValue: string) => {
  const processedHTML = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdownValue)

  return processedHTML.toString()
}

export const markdownToHtmlOnlyP = async (markdownValue: string) => {
  const processedHTML = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize, { tagNames: ['p'] })
    .use(rehypeStringify)
    .process(markdownValue)

  return processedHTML.toString()
}

export const mdRemover = (fileName: string) => fileName.replace(/\.md$/, '')
