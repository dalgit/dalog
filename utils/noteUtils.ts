import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { mdRemover } from './common'
import { readMarkdownFile } from './postUtils'
import { markdownToHtml } from './postUtils'
const noteBaseDirectory = path.join(process.cwd(), 'posts', 'note')
const noteFloders = fs.readdirSync(noteBaseDirectory)

export const getAllNoteSlugs = () => {
  const slugs: any[] = []

  noteFloders.map((noteFolder) => {
    const notesDirectory = path.join(noteBaseDirectory, noteFolder)
    const noteFileNames = fs.readdirSync(notesDirectory)

    noteFileNames.map((noteFileName) => {
      const slug = mdRemover(noteFileName)
      slugs.push([noteFolder, slug])
    })
  })
  return slugs
}

export const getNoteBySlug = async (slug: any[]) => {
  const a = slug.join('\\')
  const b = noteBaseDirectory + '\\' + a + '.md'

  const { data, content } = readMarkdownFile(b)
  const convertedContent = await markdownToHtml(content)

  return {
    postSlug: slug,
    ...data,
    content: convertedContent,
  }
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
    const slug = mdRemover(note)
    return mappingWithTitle(notesDirectory, slug)
  })
  return { name: noteFolder, value: datas }
})
