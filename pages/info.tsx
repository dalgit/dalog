import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import BorderBox from '@/components/BorderBox/BorderBox'
import { SOCIAL } from '@/data/meta'

const InfoPage = () => {
  return (
    <InfoPageLayout>
      <BorderBox title="Me">
        <Link href={SOCIAL.github}>
          <img src="https://img.shields.io/badge/github.com/dalgit-181717?style=for-the-badge&logo=github&logoColor=white" />
        </Link>
        <img src="https://img.shields.io/badge/dalgit77@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" />
      </BorderBox>
      <BorderBox title="Stack">
        <div />
        <div>
          <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
          <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
          <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
        </div>
        <div>
          <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
          <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" />
          <img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=react-query&logoColor=white" />
        </div>
        <div>
          <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
        </div>
      </BorderBox>
    </InfoPageLayout>
  )
}

export default InfoPage

const InfoPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`
