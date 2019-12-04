---
categories: Dev
date: 2016-07-27T12:00:00+09:00
title: 쉽게 React 개발환경 구축하기
url: /set-up-react-development-environment-easily/
description: Webpack 설정으로 고통받지 않는 방법.
featuredImage: ../../assets/image.png
---

React는 요즘 제일 인기가 많은 Javascript framework가 아닌가 싶습니다.

React가 좋다는 말이 여기저기서 나오니 배워보고자 하는 분들이 많으리라고 생각이 드는데...

제가 리액트를 시작하려 할 때 제일 나빴던 경험은 **개발환경 구축**이었습니다.

아무래도 JSX니 뭐니 하는 것들을 `babel`이니 뭐니 하는 걸로 바꿔는 주는데, 여기에 `browserify`니 `webpack`이니 하는 것들을 이용해서....

... 시작하기 전부터 짜증을 유발할 만합니다.

yeoman generator 같은 녀석들을 쓰면 되긴 하겠지만... 배우는 단계서부터 그런 녀석을 쓰긴 뭐하더군요. 필요없는 것들이 이것저것 덕지덕지 붙어있는 경우가 많기도 하고...

아무래도 저만 그런 건 아닌지, (아마도?) 많은 분을 고통에서 해방해줄 만한 물건이 나왔습니다.

바로 `create-react-app`입니다.

[create-react-app(github)](https://github.com/facebookincubator/create-react-app)

[create-react-app(npm)](https://www.npmjs.com/package/create-react-app)

github repo 소유자가 facebook incubator다 보니, yeoman generator 같은 애들보다 상대적으로 잘 유지보수가 될 것 같은 생각도 듭니다. 또 많은 강좌들이 이 앱으로 시작되는게 아닐까 하는 생각도 들고요.

설치는 `npm install -g create-react-app`으로 합니다.

앱 생성은 `create-react-app (앱이름)`으로 생성하고, `(앱이름)`이라는 하위 폴더에 생성됩니다.

특이한 점은 webpack 설정파일 등을 전역모듈에서 공유합니다. 생성된 앱에 추가된 패키지는 `react`, `react-dom`, `react-scripts` 정도만 되고요.

대부분 파일이 전역 파일을 사용하기 때문에, 프로젝트 자체는 깔끔하게 유지할 수 있습니다. 내부적으로 `webpack`, `webpack-dev-server` 등등을 지원해주지만, 사용자가 설정 파일을 볼 일이 없습니다.

물론 이 부분이 양날의 검으로 작용하게 되고, 전역 모듈을 수정하는 건 엄청난 삽질이기 때문에, '이럴 바엔 그냥 내가 스크립트 만들어서 돌리고 말지.' 같은 생각을 하게 될 수 있습니다.

`create-react-app`은 이에 대해 `npm run eject`라는 해법을 제공합니다.

위 커맨드는 생성된 프로젝트가 전역에 있는 파일들을 공유해서 사용하는 대신, 필요한 모듈들을 프로젝트 내부에 설치합니다. 설정파일도 프로젝트 내부에 저장이 되기 때문에 마음대로 고칠 수 있죠. (하지만 한번 하면 되돌릴 수 없습니다)

개인적으로는 이걸 [niceb5y.net](https://niceb5y.net/)을 만드는 데 사용해 보았습니다. 고작 한 페이지 만드는 거 가지고 react를 끌어다 쓰는 것도 웃기긴 하는데, 테스트 삼아 써본 결과 꽤 잘 만들어진 물건이라고 생각됩니다. (아무래도 전역 설정은 좀 안 맞아서 eject하고 수정하여 사용하였습니다)

다만 새 프로젝트를 생성하는 물건이다 보니 진행 중인 프로젝트에 React를 도입한다든가 하는 일엔 그다지 적합하지 않다는 단점도 있다고 생각합니다.

보통 저 같은 경우엔 `webpack-dev-server`같은 것들은 설정하기 싫어서 그냥 안쓰고 말았습니다만, 이런 번거로운 설정들을 대신해 주다 보니 앞으로는 종종 사용하지 않을까 싶습니다.
