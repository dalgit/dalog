import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ITags } from '@/types/tech'

interface SideBarProps {
  tags: ITags
}

const TechTagList = ({ tags }: SideBarProps) => {
  const tagNames = Object.keys(tags)
  const router = useRouter()

  return (
    <TechTagListLayout>
      <BoxTitle>TAG</BoxTitle>
      <List>
        {tagNames.map((tagName) => {
          const tagCount = tags[tagName]
          const isCurrentTag = router.asPath === `/tech/tag/${tagName}`

          return (
            <Item key={tagName} isCurrentTag={isCurrentTag}>
              <Link href={`/tech/tag/${tagName}`}>
                {tagName} ({tagCount})
              </Link>
            </Item>
          )
        })}
      </List>
    </TechTagListLayout>
  )
}

export default TechTagList

const TechTagListLayout = styled.div`
  @media ${({ theme }) => theme.device.tabletMax} {
    display: flex;
    align-items: center;
    font-size: 18px;

    white-space: nowrap;
    overflow-x: scroll;
    margin-bottom: 60px;

    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: #b89ef6;
      border-radius: 2px;
    }
    ::-webkit-scrollbar-track {
      background: none;
    }
  }
`
const BoxTitle = styled.div`
  font-weight: bold;
  margin-bottom: 23px;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.secondary};
`

const List = styled.ul`
  @media ${({ theme }) => theme.device.tabletMax} {
    display: flex;
    width: 100%;
  }
`

const Item = styled.li<{ isCurrentTag: boolean }>`
  margin-bottom: 20px;
  margin-left: 10px;
  font-weight: 300;
  width: fit-content;
  border-radius: 10px;
  padding: 5px;
  font-weight: bolder;
  background-color: ${({ isCurrentTag, theme }) =>
    isCurrentTag ? theme.colors.quaternary : theme.colors.lightGray};

  a {
    font-size: 17px;
    color: ${({ isCurrentTag }) => (isCurrentTag ? 'white' : 'gray;')};
  }
`
