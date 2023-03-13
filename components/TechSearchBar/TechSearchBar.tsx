import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled from 'styled-components'
import icon_search from '/public/assets/icon_search.svg'

const TechSearchBar = () => {
  const router = useRouter()

  const [searchKeyword, setSearchKeyword] = useState<string>('')

  const navigateToSearchPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!searchKeyword) {
      router.push({ pathname: '/' })
    } else {
      router.push({ pathname: '/search', query: { keyword: searchKeyword } })
    }
  }

  return (
    <Form onSubmit={navigateToSearchPage}>
      <Button type="submit">
        <Image src={icon_search} width={20} alt="icon_search" />
      </Button>
      <Input
        type="text"
        onChange={(e) => setSearchKeyword(e.target.value)}
        placeholder="Search for keword"
      />
    </Form>
  )
}

export default TechSearchBar

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  justify-content: center;

  @media ${({ theme }) => theme.device.tabletMax} {
    border: 1px solid #b5b5b5;
    border-radius: 20px;
    height: 40px;
    padding: 0 20px;
  }
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
`

const Input = styled.input`
  border: none;
  font-size: 15px;
  width: 100%;
  ::placeholder {
    color: #b5b5b5;
    font-weight: lighter;
  }

  :focus {
    outline: none;
  }
`
