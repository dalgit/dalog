import logo from '/public/assets/github_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { SOCIAL } from '@/data/meta'

const Footer = () => {
  return (
    <FooterLayout>
      <Link href={SOCIAL.github}>
        <Image src={logo} width={30} alt="github" />
      </Link>
      <span>Copyright © Dalgit 2023 | {SOCIAL.email}</span>
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
  height: ${({ theme }) => theme.pageBaseSize.footerHeight};
  box-sizing: border-box;

  span {
    margin-top: 10px;
    font-size: 12px;
    color: white;
  }
`
