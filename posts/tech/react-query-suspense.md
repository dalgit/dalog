---
title: 'suspense로 사용자 경험 개선하기 (with react-query)'
createdDate: '2023-06-10'
tags: ['react', 'suspense', 'react-query']
thumbnail: 'thumbnail.png'
---

```javascript
const SomeComponent = () => {
  const { data: channels = [] } = useRecommendedChannels({
    suspense: true,
  })

  const { data: searchedchannels = [] } = useChannelsByKeword('고양이', {
    suspense: true,
  })

  return ...
```

한 컴포넌트내에서 두개 이상의 suspense query가 있을경우

![network1](/posts/react-query-suspense/network1.png)

위와 같은 워터풀현상이 일어남.

방지하고싶으면, 컴포넌트를 나누거나 useQueries를 사용해야함

(useQueries로 suspense의 정상적인 사용은 v4.5부터 가능)

---

```javascript
const HomeTemplate = () => {
  return (
    <S.HomeTemplateLayout>
      <Suspense fallback={<>로딩1</>}>
        <SomeComponent1 /> //useRecommendedChannels query
      </Suspense>
      <Suspense fallback={<>로딩2</>}>
        <SomeComponent2 /> //useChannelsByKeword query
      </Suspense>
    </S.HomeTemplateLayout>
  )
}
```

![network2](/posts/react-query-suspense/network2.png)
이렇게 하나의 컴포넌트에 하나의 api만 사용하도록 설계하고 suspense를 사용한다면

병렬로 실행되어, 워터풀을 방지할수 있지만

요청이 끝난 순으로 등장하므로 사용자 경험에 악영향을 끼칠수있음.

---

```javascript
const HomeTemplate = () => {
  return (
    <S.HomeTemplateLayout>
      <Suspense fallback={<>로딩</>}>
        <SomeComponent1 /> //useRecommendedChannels query
        <SomeComponent2 /> //useChannelsByKeword query
      </Suspense>
    </S.HomeTemplateLayout>
  )
}
```

이렇게 각 쿼리가 있는 컴포넌트들을 모두 감싸주는 경우에는

모든 컴포넌트의 요청이 끝난후에 렌더되므로 사용자 경험을 개선할 수 있음.

그러나, 이 말은 끝난 컴포넌트가 있음에도, 다른 컴포넌트를 기다려야한다는 것이다.

따라서, 설계할 때 무엇이 좋을지, 또한 꼭 suspense를 사용해야하는지 생각해보자.
