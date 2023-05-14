---
title: 'nextjs ssr에서 react-query error handling'
createdDate: '2023-05-14'
tags: ['nextjs', 'react-query']
thumbnail: 'thumbnail.png'
---

```javascript
export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['queryKey'], queryFn())

  return {
    props: { dehydratedProps: dehydrate(queryClient) },
  }
}
```

만약 nextjs에서 react-query를 사용하는 경우, ssr/ssg에서 heydrate방식으로 할때가 많다.
그러나 이 경우, 서버사이드 내에서 에러처리를 해야하는 경우가 있다.

그러나, prefetchQUery에 대해 에러핸들링을 시도해도 (리다이렉트 혹은 낫파운드)
전혀 처리가 되지 않았다.

---

```javascript
 ...: Promise<void> {
    return this.fetchQuery(arg1 as any, arg2 as any, arg3)
      .then(noop)
      .catch(noop)
  }
```

[(code)](https://github.com/TanStack/query/blob/00d0c527bc67cb0db7be9682565c60ffafc1ad51/src/core/queryClient.ts#L410-L412)
이유는 다음과 같았다.

prefetchQuery는 fetchQuery를 래핑한 것으로, 에러를 무시하는 프로미스를 반환한다.

따라서, 이러한 경우에, 에러핸들링을 할 때, fetchQuery를 사용하자.

```javascript
export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  try {
    await queryClient.fetchQuery(['key'], queryFn())
    return {
      props: { dehydratedProps: dehydrate(queryClient) },
    }
  } catch {
    return { notFound: true }
  }
}
```
