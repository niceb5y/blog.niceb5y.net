---
categories: Life
date: 2017-08-08T12:00:00+09:00
title: Netlify에 블로그 호스팅
url: /host-blog-on-netlify/
description: 또 블로그 옮긴 이야기.
featuredImage: ../../assets/image.png
---

이 블로그도 이제 나름 2014년부터 4년 정도의 역사를 가지게 됐군요.

[처음](https://blog.niceb5y.net/new-server-new-blog/)엔 홈서버에서 돌아가는 Wordpress였고,

[그 다음](https://blog.niceb5y.net/new-blog-again/)엔 어쩌다 보니 Github Pages에서 호스팅되는 Jekyll 블로그가 되었고요.

[어쩌다](https://blog.niceb5y.net/blog-now-supports-http2/) 다시 홈서버로 이전했다가,

오늘 다시 홈서버를 벗어나게 되었습니다.

그리고 이번 종착역은 [Netlify](https://www.netlify.com/)입니다.

&nbsp;

## Netlify

[![netlify](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com)

대부분 [Github Pages](http://pages.github.com)와 비슷한 물건입니다만, 다른점으로는 **CDN을 통한 배포**와 **커스텀 도메인 HTTPS 지원**이 있습니다.

그리고 위 기능을 포함한 대부분의 기능을 **무료**로 지원합니다.

[사용 약관](https://www.netlify.com/tos/)를 살펴보니, 무료 계정은 월간 100GB의 트래픽/저장소 용량 제한이 있다고 하는데, 웬만큼 사용하기엔 충분한 양이라 생각됩니다. 오히려 수익이 어디서 나는지 약간 의문이 들기도 하네요. ~~망해서 사라지면 안되는데~~

사용해보니 딱히 부족한 기능도 없고, CDN 속도도 괜찮은 것 같아(이미지 서빙에는 Cloudfront 쓰는듯?) 마음에 듭니다.

&nbsp;

## 이하 잡설

사이트마다 공통으로 사용되던 에셋들(JS, CSS 등...)도 이번 기회에 CDN(Cloudfront)로 올렸습니다.

이건 요금이 어떻게 나올지 모르니 한달정도 써보고 계속 사용할지 고민해봐야겠네요.
