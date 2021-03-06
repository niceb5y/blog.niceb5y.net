---
categories: Dev
date: 2018-12-08T23:57:02+09:00
title: 'MSHTML의 끝'
url: '/the-end-of-the-mshtml/'
description: '2018년의 웹 브라우저: 크롬이냐, 아니냐.'
featuredImage: ../../assets/image.png
---

한때 '인터넷 익스플로러'라는 웹브라우저가 절대적이던 시절이 있었습니다. 그 위세가 얼마나 대단했는지 5년 동안 메이저 업데이트 한번 없던 시절(인터넷 익스플로러 6)이 있었을 정도로 말이죠.
인터넷 익스플로러는 막강한 점유율을 바탕으로 웹 표준 위에 군림하고자 했고, 수 많은 사람들은 그것을 못마땅해했습니다. 그에 맞서 많은 대체재가 나왔습니다. 파이어폭스나 구글 크롬 같은 것들요. 시간이 흘러 모바일 시장이 성장하고, 인터넷 익스플로러는 발전 경쟁에서 밀려나게 되면서 크롬에 1등 자리를 내주게 됩니다.

모바일과 웹에서 주도권을 잡지 못했던 마이크로소프트는 윈도우 10을 출시하면서 이 분위기를 반전시키고자 새로운 브라우저를 내놓습니다. 발표 전에는 프로젝트 스파르탄이라 불리던, 마이크로소프트 엣지를 말이죠. 엣지는 새로운 레이아웃 엔진을 탑재하였는데, 이것이 바로 EDGEHTML입니다. 역사가 긴 MSHTML에서 많은 레거시 코드를 제거하고, 현대적 웹사이트에 맞추어 재작성된 엔진이죠.

윈도우 10 발표 후 오랜 시간이 지났지만, 안타깝게도 그 당시의 마이크로소프트의 비전중엔 실현되지 못한 것이 많습니다. 윈도우 10 모바일이 그렇고, 엣지도 거기에 포함됩니다. 마이크로소프트에서는 인터넷 익스플로러의 영광을 되찾고 싶었겠지만, 그보다 심각하게 모자랐죠. 이미 대세는 크롬으로 기울었고, 아마 엣지와 인터넷 익스플로러의 차이를 아는 사람이라면 다른 브라우저를 사용했을겁니다. 결국 얼마 전, 마이크로소프트에서는 EDGEHTML의 개발을 포기하고 [엣지를 크로미움 기반으로 개발하겠다는 선언](https://blogs.windows.com/windowsexperience/2018/12/06/microsoft-edge-making-the-web-better-through-more-open-source-collaboration/#7v2imWM4QZVxi1Ei.97)이 있었습니다. [크로미움 프로젝트](https://www.chromium.org/)는 구글 크롬의 기반이 되는 오픈소스 프로젝트니, 크롬과 엣지가 같은 뿌리를 두는 셈이 됩니다. EDGEHTML로 내려오는 MSHTML의 계보는 여기서 끝을 맺게 되고요. 마이크로소프트 입장에서는 뼈아픈 결정이죠.

현대 웹브라우저는 매우 복잡한 구조를 가지고 있습니다. 웹 애플리케이션 등의 발달로 웹 구조는 점점 더 복잡해지고 발전 속도도 빠릅니다. 따라서 이를 구동하기 위한 웹브라우저의 엔진을 개발하는 데에는 많은 비용이 듭니다. 이 때문에 마이크로소프트 이전에도 오페라 브라우저가 크로미엄 기반으로 이전하는 일이 있었습니다. 또 새로 만들어지는 브라우저들 또한 많은 브라우저가 크로미엄에 기반을 두고 있습니다. [비발디 브라우저](https://vivaldi.com) 같은 것들이 말이죠.

크로미엄의 렌더링 엔진은 블링크, 자바스크립트 처리 엔진은 V8이라고 부르는 엔진을 사용합니다. 그런데 렌더링 엔진인 블링크는 애플이 제작하는 브라우저 사파리의 엔진인 [웹킷(WebKit)](https://webkit.org/)의 웹 코어(Web Core)에서 분기(fork)된 엔진입니다. 마이크로소프트의 이번 결정으로 인해서, (새롭게 개발될) 엣지, 크롬, 오페라, (웹킷까지 포함한다면) 사파리까지 많은 엔진 상의 유사점을 갖게 되고, 이 브라우저들만을 **위한** 웹사이트가 늘어날 가능성이 큽니다. 이미 구글이 새로 만든 [구글 어스 웹페이지](https://earth.google.com/web) 등에서는 현실이 되고 있습니다. 마치 [인터넷 익스플로러 6의 웹을 보는 것처럼](https://www.theverge.com/2018/1/4/16805216/google-chrome-only-sites-internet-explorer-6-web-standards) 말이죠.

메이저 브라우저 중 유일하게 웹킷 기반이 아닌(...) 파이어폭스를 개발하는 모질라 재단에서는 [엣지가 크로미움 기반으로 이전한다는 사실에 대해 우려](https://blog.mozilla.org/blog/2018/12/06/goodbye-edge/)를 표명했습니다. 파이어폭스를 좋아하는 저로서도 참 안타깝지만, 파이어폭스가 웹 브라우저의 균형을 맞추거나 상황을 뒤바꾸기는 어려울 것 같습니다. 크롬은 인터넷 익스플로러와 달리 실제로 뛰어난 브라우저이고 (개인정보 보호 측면의 아쉬움만 제외하면), 구글은 웹과 모바일을 실제로 지배하고 있습니다. 윈도우 모바일과 MSN/Bing과는 다르게 말이죠. 마케팅 능력과 개발자 풀은 구글과 모질라를 비교하기 미안할 정도고요.

월드 와이드 웹이 처음 등장했을 때 개방과 평등의 공간을 지향했지만 실제로는 그렇지 못했듯이, 웹브라우저의 세계도 같은 운명을 맞이하게 되었습니다. 별일 없다면 오랫동안 크로미엄이 천하를 호령하게 될 것입니다.

한편으로는 마이크로소프트와 구글의 동거가 얼마나 순탄하게 계속될지도 궁금합니다. 예전에 웹킷으로 다투다 한 쪽이 뛰쳐나갔던 애플과 구글 같은 일이 한번 더 벌어지게 될까요?

## 여담

1. 웹킷이 개발된 이유는 스티브 잡스 복귀 후 회사 사정이 좋지 않았던 애플이 마이크로소프트와 맺은 협약에 의해 만들어진 **맥용 인터넷 익스플로러를 대체**하는 브라우저(지금의 사파리)를 만들기 위함이었습니다. 그게 분기되어 블링크가 되고, 그게 다시 마이크로소프트의 새 브라우저에 들어간다니, 참으로 아이러니하죠.
2. 웹킷의 뿌리는 [KDE](https://konqueror.org/features/browser.php)의 [KHTML](https://konqueror.org/features/browser.php)이라는 오픈소스 레이아웃 엔진이죠. 마침내는 웹 브라우저에서 오픈소스 진영이 승리했다고도 볼 수 있겠습니다. 비록 오픈소스 진영이 원하던 형태랑은 거리가 있지만요.
