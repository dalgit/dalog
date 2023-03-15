import styled from 'styled-components'
import TechSearchBar from '../TechSearchBar/TechSearchBar'
import TechTagList from '../TechTagList/TechTagList'
import { ITags } from '@/types/tech'

interface TechSideBarProps {
  tags: ITags
}

const TechSideBar = ({ tags }: TechSideBarProps) => {
  return (
    <TechSideBarLayout>
      <TechSearchBar />
      <TechTagList tags={tags} />
    </TechSideBarLayout>
  )
}

export default TechSideBar

const TechSideBarLayout = styled.div`
  font-size: 11px;
  min-width: 120px;
  max-width: 120px;
  margin-left: 24px;

  @media ${({ theme }) => theme.device.tabletMax} {
    max-width: 100%;
    margin-left: 0;
  }
`
