import styled from 'styled-components'
import icon_github from '/public/assets/icon_github.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <FooterLayout>
      <Link href="https://github.com/dalgit">
        <Image src={icon_github} width={30} alt="icon_github" />
      </Link>
      <span>Copyright © Dalgit 2023 | tmp@tmp.com</span>
    </FooterLayout>
  )
}

export default Footer
const FooterLayout = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 100%;
  height: ${({ theme }) => theme.layoutHeight.footer};
  box-sizing: border-box;

  span {
    margin-top: 10px;
    font-size: 12px;
    color: white;
  }
`
