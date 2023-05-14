---
title: 'nextjs13에서 react-quill 사용하기'
createdDate: '2023-05-13'
tags: ['nextjs', 'react-quill']
thumbnail: 'thumbnail.png'
---

nextjs 13버전으로 프로젝트를 진행하는데,
포스트 작성 기능때문에 react-quill을 사용하려 했으나,
ref 연결 오류로 고생한 기억에 글을 작성한다.

## 1. 설치

```javascript
yarn add react-quill
or
npm install react-quill
```

## 2. dynamic import

```javascript
import dynamic from 'next/dynamic'
import { RefObject } from 'react'
import ReactQuill, { ReactQuillProps } from 'react-quill'

interface CustomQuillProps extends ReactQuillProps {
  forwardedRef: RefObject<ReactQuill>;
}

export const DynamicQuill = dynamic(
  async () => {
    const { default: ReactQuill } = await import('react-quill')
    const CustomQuill = ({ forwardedRef, ...props }: CustomQuillProps) => (
      <ReactQuill ref={forwardedRef} {...props} />
    )
    return CustomQuill
  },
  { ssr: false },
)
```

nextjs에서 react-quill을 동작시키려면 서버에 모듈을 포함시키면 안된다. react-quill을 동작하기 위한 window객체는 서버에 없기때문에, document가 정의 된 후에, 동적으로 import해야한다.

또한 useRef 혹은 createRef는 dynamic import와 함께 동작하지 않기에, quill조작을 위한 ref를 연결하기 위해선, next/dynamic에서 함수로 react-quill을 dynamic import를 해서 forwardRef패턴을 통해 전달된 ref로 요소에 접근할 수 있도록 해준다.

```javascript
import 'react-quill/dist/quill.snow.css'
import { DynamicQuill } from './DynamicQuill'
import useQuill from './useQuill'

interface QuillProps {
  setContent: React.Dispatch<React.SetStateAction<string>>
}

const Quill = ({ setContent }: QuillProps) => {
  const { quillRef, modules } = useQuill()

  return (
    <DynamicQuill
      onChange={setContent}
      forwardedRef={quillRef}
      modules={modules}
      theme="snow"
    />
  )
}​
```

나머지 modules, theme, 필요한 이벤트들을 연결해주면 된다.
