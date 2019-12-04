---
categories: Dev
date: 2017-02-23T12:00:00+09:00
title: 첫 SHA-1 충돌이 발표되다.
url: /the-first-SHA1-collision-announced/
description: SHA-1이 죽었습니다.
featuredImage: ../../assets/image.png
---

[CWI Institute in Amsterdam](https://www.cwi.nl)과 구글에서 첫 SHA-1의 충돌을 발견했다고 [발표](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html)했습니다.

해시 충돌은 다음 두 개의 PDF 파일로 직접 테스트 해 보실 수 있습니다. ([파일1](https://shattered.it/static/shattered-1.pdf), [파일2](https://shattered.it/static/shattered-2.pdf))

```bash
$ openssl dgst -sha1 shattered-1.pdf
SHA1(shattered-1.pdf)= 38762cf7f55934b34d179ae6a4c80cadccbb7f0a
$ openssl dgst -sha1 shattered-2.pdf
SHA1(shattered-2.pdf)= 38762cf7f55934b34d179ae6a4c80cadccbb7f0a
```

직접 해보니 정말 똑같이 나오는군요. (당연한 소리지만.)

어쨌거나, 이 해시 충돌을 발견하기 위해 9,223,372,036,854,775,808의 SHA1 계산이 있었다고 합니다.

사상 최고의 SHA-1 충돌 찾기 프로젝트는 Git으로 알고 있었는데, 최초 타이틀은 구글이 가져가게 되었다고 합니다.

충돌 값 하나 나오기까지 들인 노력을 생각하면, 당장 위험한 일은 없으려니 싶지만...

이 기회에 많은 애플리케이션이 SHA-3 이상으로 업그레이드 되었으면 좋겠습니다.
