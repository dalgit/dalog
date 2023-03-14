import Link from 'next/link'
import styled from 'styled-components'
import { Topic } from '@/types/note'

interface NoteCategoryItemProps {
  topic: Topic
  categoryName: string
  getIsCurrentTopic: (slug: string) => boolean
}

const NoteCategoryItem = ({
  topic,
  categoryName,
  getIsCurrentTopic,
}: NoteCategoryItemProps) => {
  const { slug, title } = topic
  const path = `/note/${categoryName}/${slug}`
  const isCurrentTopic = getIsCurrentTopic(path)

  return (
    <Item isCurrentTopic={isCurrentTopic} key={slug}>
      <Link href={path}>{title}</Link>
    </Item>
  )
}

export default NoteCategoryItem

const Item = styled.li<{ isCurrentTopic: boolean }>`
  margin: 15px 0px 15px 30px;

  a {
    font-size: 16px;
    padding-left: 5px;
    color: ${({ isCurrentTopic, theme }) =>
      isCurrentTopic ? theme.colors.primary : 'black'};
  }
`
