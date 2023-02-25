import path from 'path'
import fs from 'fs'
import matter 
import { markdownToHtml } from './postUtils'
const noteBaseDirectory = path.join(process.cwd(), 'posts', 'note')

export const noteFloders = fs.readdirSync(noteBaseDirectory)

export const getNoteBySlug = async (slug: any[]) => {
  const a = slug.join('\\')
  const b = noteBaseDirectory + '\\' + a

  const { data, content } = readMarkdownFile(b)
  const convertedContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    ...data,
    content: convertedContent,
  }
}

export const readMarkdownFile = (slug: string) => {
  const fileName = `${slug}.md`
  const postContent = fs.readFileSync(fileName, 'utf-8')
  return matter(postContent)
}

export const mappingWithTitle = (dir: any, slug: any) => {
  const noteDirectory = path.join(dir, `${slug}.md`)
  const note = fs.readFileSync(noteDirectory)
  const {
    data: { title },
  } = matter(note)

  const mappedData = { slug, title }
  return mappedData
}

export const notes = noteFloders.map((noteFolder) => {
  const notesDirectory = path.join(noteBaseDirectory, noteFolder)
  const notes = fs.readdirSync(notesDirectory)
  const datas = notes.map((note) => {
    const slug = note.replace(/\.md$/, '')
    return mappingWithTitle(notesDirectory, slug)
  })
  return { name: noteFolder, value: datas }
})
