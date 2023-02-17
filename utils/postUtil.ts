import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')
const postFiles = fs.readdirSync(postsDirectory)

const postUtil = {
  getAllPosts: () => {
    const posts = postFiles.map((postFile) => {
      const postSlug = postFile.replace(/\.md$/, '')
      const postDirectory = path.join(process.cwd(), 'posts', postFile)
      const postContent = fs.readFileSync(postDirectory, 'utf-8')
      const { data, content } = matter(postContent)

      const postData = {
        postSlug,
        ...data,
        content,
      }

      return postData
    })

    return posts
  },

  getPostBySlug: (slug: string) => {
    const postDirectory = path.join(process.cwd(), 'posts', `${slug}.md`)
    const postContent = fs.readFileSync(postDirectory, 'utf-8')
    const { data, content } = matter(postContent)

    const postData = {
      ...data,
      content,
    }

    return postData
  },
}

export default postUtil
