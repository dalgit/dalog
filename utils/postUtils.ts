import fs from 'fs/promises'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

export const readMarkdownFile = async (file: string) => {
  const postContent = await fs.readFile(file, 'utf-8')
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
    .use(() => (tree) => {
      tree.children = tree.children.filter(
        (node) => node.type === 'element' && node.tagName === 'p',
      )
    })
    .process(markdownValue)

  return processedHTML.toString()
}

export const mdRemover = (fileName: string): string =>
  fileName.replace(/\.md$/, '')
