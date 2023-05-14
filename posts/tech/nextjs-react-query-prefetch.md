---
title: 'nextjs ssr에서 react-query 사용하기'
createdDate: '2023-05-14'
tags: ['nextjs', 'react-query']
thumbnail: 'thumbnail.png'
---

```javascript
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { AppProps } from 'next/app'
import { useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () => new QueryClient(...),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedProps}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
```

Hydrate컴포넌트를 통해, 서버에서 생성되는 dehydratedProps를 전해주자.
이때, queryClient는 useState를 사용해 라이프 사이클마다 재선언되는걸 막아줘야한다.

이후, pageProps에 전달된 dehydrate된 props를 hydrate시켜, 
동일한 쿼리로 값에 접근할 수 있다.

```javascript
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { GetServerSideProps } from 'next/types'

const Page = () => {
  const { data } = useQuery(['key'], queryFn())

  return <>....</>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['queryKey'], queryFn())

  return {
    props: { dehydratedProps: dehydrate(queryClient) },
  }
}
```

이제, 서버 사이드에서 실행할 쿼리는 prefetch하여, 해당 queryClient를 dehydrate로 넘겨주면 된다.
그럼 해당 트리 아래의 모든 컴포넌트에서는 props drilling 없이 사용가능하다.

이때, 서버에서 사용한 쿼리키와 다르지 않도록 주의하자.
