---
categories: update
date: 2017-04-22T09:00:00Z
title: LivePhotosKit JS 테스트
url: /test-for-livephotoskit-js/
---

<script src="https://cdn.apple-livephotoskit.com/lpk/1/livephotoskit.js"></script>

<div
  data-live-photo
  data-photo-src="/images/coldplaylive1.jpg"
  data-video-src="/images/coldplaylive1.mov"
  style="width: 400px; height: 300px; margin: 10px 0">
</div>
<div
  data-live-photo
  data-photo-src="/images/coldplaylive2.jpg"
  data-video-src="/images/coldplaylive2.mov"
  style="width: 400px; height: 300px; margin: 10px 0">
</div>
<div
  data-live-photo
  data-photo-src="/images/coldplaylive3.jpg"
  data-video-src="/images/coldplaylive3.mov"
  style="width: 400px; height: 533px; margin: 10px 0">
</div>

사진은 아마 눈치 채셨겠지만, 저번에 다녀온 [그 공연](https://blog.niceb5y.net/coldplay-ahfod-tour-in-seoul-2017/)입니다.

애플이 웹을 위한 [라이브 포토 라이브러리](https://developer.apple.com/live-photos/)를 공개했습니다.

소감은...

* 애플이 [NPM](https://www.npmjs.com/package/livephotoskit/)에 무언가를 다 올리다니....
* [타입스크립트](https://cdn.apple-livephotoskit.com/lpk/1/livephotoskit.d.ts) 정의 파일을 줄 만큼 친절한 회사던가...?
* 심지어, 전용 CDN을... `<script src="https://cdn.apple-livephotoskit.com/lpk/1/livephotoskit.js"></script>` 제공하다니....

정도입니다.

이래 저래 보니 반응형으로 써먹긴 어려운 녀석인 것 같습니다. -_-;;

<del>뭐 이게 다 CSS의 잘못입니다만....</del>
