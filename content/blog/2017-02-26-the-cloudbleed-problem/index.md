---
categories: Dev
date: 2017-02-26T12:00:00+09:00
title: Cloudbleed 문제
url: /the-cloudbleed-problem/
description: 어느 것이든 쉽게 믿을 수 없습니다.
featuredImage: ../../assets/image.png
---

23일 저녁만 하더라도, 다음 날의 보안 관련 뉴스 중에서는 [SHA-1의 충돌쌍 발견](https://blog.niceb5y.net/the-first-SHA1-collision-announced/)이 가장 큰 뉴스일 줄 알았습니다.

그리고 24일이 되고 일어나서 본 것은....

&nbsp;

## [Cloudbleed](https://bugs.chromium.org/p/project-zero/issues/detail?id=1139)

Cloudflare parser의 버그로 인해 메모리 누수가 발생하였고, Cloudflare를 사용하는 사이트들의 HTTPS 세션 데이터들이 검색엔진 등에 [유출](https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug/)이 된 것입니다.

그리고 Google project zero의 Tavis Ormandy가 [알려주기 전](https://twitter.com/taviso/status/832744397800214528)까지 몰랐었다고 합니다. -\_-;;

그리고 한 가지 안타까운 사실은, 제 서버의 도메인도 Cloudflare를 사용했**었**다는 것입니다. 민감한 정보들은 없었으니 다행이라면 다행이지만.

뉴스를 듣고 나서 Cloudflare 사용을 그만해야겠다고 생각하고, 대체제를 찾았습니다. 사실 그렇게 오랜 시간 찾지도 않았습니다. 저번에 한번 써볼까 하던 서비스가 있었거든요. 많은 분들이 아실 그 서비스의 이름은 바로 [Route 53](https://aws.amazon.com/ko/route53/)입니다.

AWS 계정이야 이미 있었고, 저번에 네임서버 변경 직전까지 해보다가 때려친 적이 있었기에 힘들지 않게 변경할 수 있었습니다.

그런데 한 가지 문제가 있었죠. 바로 *이 블로그*입니다.

Github pages에 연결되어 있었고, 커스텀 도메인을 사용하고 있었기 때문에 Cloudflare의 SSL을 사용하고 있었거든요.

그런데 Cloudflare없이 연결을 하자니, HTTPS 연결을 사용할 수 없게 된 것입니다.

해결책은.... (이렇게 말하니 좀 허무하지만) 블로그 서버를 옮겼습니다. 게다가 미뤄놨던 이런 저런 작업들을 하다 보니 시간을 꽤 잡아먹고 말았네요.

25일 쓰려던 블로그 포스팅이 이렇게 된 걸 보면 말이죠.

이야기가 다른 곳으로 새긴 했지만, Cloudbleed는 잠재적으로 큰 위험성을 지니고 있다고 생각합니다. 그러므로 인터넷 사이트들의 비밀번호를 모두 바꾸는 것이 바람직해 보입니다. 당장 저만 하더라도 바꿔야겠다는 생각만 하고 엄두를 못 내고 있지만요.
