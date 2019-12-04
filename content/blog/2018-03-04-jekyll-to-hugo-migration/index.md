---
categories: Life
date: 2018-03-04T21:28:56+09:00
title: 'Jekyll에서 Hugo로 이주'
url: /jekyll-to-hugo-migration/
description: 변덕은 그치지 않습니다.
featuredImage: ../../assets/image.png
---

한번 더 변덕을 부려봤습니다.

[Wordpress](https://wordpress.org)부터 시작했던 이 블로그가 [Jekyll](https://jekyllrb.com)을 거쳐 이젠 [Hugo](https://gohugo.io)로 왔습니다.

Jekyll과 비교했을땐 조금 더 빠른 듯 한데, Jekyll로 사용했을 때도 큰 불편은 없었습니다. 포스팅이 적어서(...) 그런진 모르지만요.

일단 좋은 점은 Dependency가 없다는 점입니다. 그냥 hugo만 설치하면 끝.

Jekyll은 ruby도 안 써봤는데 gem 사용하는게 저랑은 잘 안맞더군요. 뭔가 속도도 느리고.

쉽게 얻을 수 있는 [테마](https://themes.gohugo.io/)는 많지만, 이번에도 직접 테마를 만들었습니다. 아직 모든 기능(검색이라던지)를 구현하진 못했지만, 시간 되는 대로 추가할 예정입니다.

이번 테마는 가볍게 작동하는 것을 목표로 삼았기 때문에 Bootstrap을 사용하지 않고 [BASSCSS](http://basscss.com)에 SCSS를 이용하여 만들었습니다. 웹폰트를 사용하지 않는다던지, 이런 저런 감량을 한 끝에 상당히 많은 용량을 줄일 수 있었습니다.

또, [Shortcodes](https://gohugo.io/content-management/shortcodes/)기능이라던지, 편집중에 자동 새로고침을 지원하는 점이라던지, draft를 지원하는 점이라던지 꽤 매력적인 기능들이 많습니다. 개발 속도도 빠르고요.

테마 만드느라 이쪽만 붙들고 있던 탓에, 1~2월 포스팅을 제대로 하진 못했습니다만, 남은 10달동안 더 많은 블로그 포스팅을 할 수 있다면 좋겠습니다.
