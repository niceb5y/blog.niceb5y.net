---
categories: Life
date: 2017-02-27T12:00:00+09:00
title: Redesign@2017
url: /redesign-at-2017/
description: 새해 맞이 디자인 변경.
featuredImage: ../../assets/image.png
---

올해를 맞아 웹사이트들의 디자인을 변경해 보았습니다.

디자인 철학같은 심오한 포스팅을 작성하기에는 모자란 능력이라, 그냥 간단히 몇가지 변경점이나 이야기해보려 합니다.

## Bootstrap 4

현재 제가 호스팅 하고 있는 사이트들은 모두 Bootstrap 기반으로 제작되어 있습니다.
아무래도 문서화가 잘 되어있고, 쓰다 보니 익숙해졌기 때문에 계속 사용하게 되는 것 같습니다.

물론 많은 웹사이트들이 비슷해 보이게 만드는 주범이기도 하지만, 요즘은 Bootstrap보다는 Google의 [Material Design](https://material.io/guidelines/)을 따라한 디자인들이 더 심한 듯 싶어서 그냥 쓰기로 했습니다.

그리고 Bootstrap을 사용하는 데에는 한 가지 더 이유가 있습니다. 바로 [공식 Bootstrap 테마](https://themes.getbootstrap.com)를 샀기 때문이지요.
현재 3 종류의 테마를 판매하고 있으며, Bootstrap 제작자들이 직접 제작했고, 업데이트도 꾸준히 지원해 준다는 장점이 있습니다. 그리고 가격은 테마 당 \$99입니다. 그렇습니다. 높은 가격에 테마를 샀으니, 본전을 뽑기 위해 쓰는 것이죠. 그래도 장점은 있습니다. 추가 컴포넌트들이 제공되며, 꽤 예쁘고, 덜 Bootstrap같습니다(...).

여튼, 얼마전에 Bootstrap v4 alpha 6를 적용한 테마가 업데이트 되었고, 이 김에 Bootstrap v3에서 v4로 마이그레이션 해 보기로 했습니다.

Bootstrap v4의 변경점은 꽤 큽니다. 드디어 flexbox 지원이 들어갔고, Less 대신 Sass를 사용하고, IE9의 지원이 drop되었습니다. 그리고.... 생각했던 것 보다 호환성이 많이 깨졌습니다. 덕분에 고생을 많이 하긴 했지만, flex지원 같은 부분들은 마음에 듭니다.

## Color

지난 디자인에서는 사이트별로 Primary Color를 각각 다르게 지정했었습니다. 당연히 사이트별로 다른 CSS파일을 만들어주다 보니, 몇 안되는 사이트들도 감당이 좀 힘들더군요. 그래서 이번 디자인에는 한가지 색으로 통일해주기로 하였습니다.

그런데 색을 고르는 작업은 꽤 쉬웠습니다. 그냥 PANTONE의 *Color of the year 2017*로 선정된 [Greenery](https://www.pantone.com/color-of-the-year-2017)를 사용했거든요.

물론 2016년도의 색이었던, [QUARTZ & SERENITY](https://www.pantone.com/color-of-the-year-2016)는 Primary Color로 쓰기엔 약간 부담스러운 색이었지만 Greenary는 명도나 시인성을 볼때 꽤 괜찮아 보였기에 적용했습니다. 꽤 마음에 드는 색이기도 했고요.

또한 추가적으로 몇가지 색상들을 추가했습니다.

<button class="btn btn-amami">amami</button>

<button class="btn btn-kisaragi">kisaragi</button>

<button class="btn btn-hoshii">hoshii</button>

등 12색을 추가했습니다. 아마 이름 보면 어디서 따 온 색상인지 알 분들은 다 아실듯.

Bootstrap에서 색상 셋을 새로 추가하는 과정은 꽤 손이 많이 가는 과정이었습니다. 기존 색상 찾아서 그 밑에 추가하고... 하는 과정 말이죠.

## Font

웹폰트는 참 계륵같은 존재입니다.

특히 CJK문자는 더 심하죠. 용량이 latin 문자에 비해 심하게 크니까요.

이번 디자인에 웹 폰트를 넣을까 말까 하던 도중에 이번 결정에 큰 영향을 끼친 발표가 있었습니다.

[Spoqa han sans](https://spoqa.github.io/spoqa-han-sans/ko-KR/)가 [2.0 버전을 출시](https://spoqa.github.io/2017/02/15/SHS-trivia.html)한 것이죠.

예전에도 잠깐 사용한 적 있었던 폰트였는데, 이번 변경점이 꽤 마음에 들었기 때문에 사용하기로 했습니다.

며칠 써 보니 다 좋은데 윈도우 환경에서는 그렇게 깔끔한 글씨를 보여주진 않는 것 같습니다. ~~물론 아무리 생각해도 윈도우가 나쁩니다만...~~

추가로 비동기 폰트 로딩을 위해 [webfontloader](https://github.com/typekit/webfontloader)를 적용하였습니다.

## Unify

이번 디자인 개편에 가장 중점이라면 중점을 둔 부분입니다.

말은 거창하지만 별 것 없습니다. 파일 하나 잘 만들어서, 서버에 잘 업로드 하고, 여러 곳에서 다 쓰기.

이번에 사용된 에셋들은 모두 assets.niceb5y.net 도메인에 연결된 제 홈서버에 업로드 하여 사용하고 있습니다. 캐시 설정도 해 두었기 때문에 이론적으로는 이 사이트 저 사이트 돌아다녀도 다시 받을 필요가 없겠지요.

CDN에 올려둘까 말까는 아직 고민중이긴 하지만, 다른 사람 말 들어봐도 느리다는 느낌이 별로 없기 때문에 당분간 이렇게 사용할 듯 싶습니다.

## 마치며.

이번에 [niceb5y.net](https://niceb5y.net)을 수정하는 과정에서 파일을 업로드 하다 `rsync --delete` 명령을 잘못 날리는 바람에 제 서버의 홈 디렉토리의 파일이 모두 삭제되고 말았습니다.

이 자리를 빌어 삭제된 파일들에게 애도를 표합니다.
