import styled from 'styled-components'

interface SearchResultProps {
  keyword: string
  postCount: number
}

const SearchResult = ({ keyword, postCount }: SearchResultProps) => {
  const hasPosts = postCount > 0

  return (
    <SearchResultLayout>
      {hasPosts
        ? `'${keyword}'에 대한 결과 : ${postCount}건`
        : `'${keyword}'에 대한 결과가 없습니다.`}
    </SearchResultLayout>
  )
}

export default SearchResult

const SearchResultLayout = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors._CBD9FC};
  color: white;
  padding: 4px;
`
