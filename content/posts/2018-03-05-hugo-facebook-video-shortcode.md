---
categories: update
date: 2018-03-05T21:54:39+09:00
title: "Hugo Facebook Video Shortcode"
url: "/hugo-facebook-video-shortcode/"
tags: [ "Hugo", "Facebook", "Youtube" ]
keywords: [ "Hugo", "Facebook", "Youtube" ]
---

[전 포스트](/jekyll-to-hugo-migration/)에서 말씀드렸다시피, 얼마 전, Jekyll에서 Hugo로 블로그를 이전하였습니다.

Hugo는 [Shortcode](https://gohugo.io/content-management/shortcodes/)라는 문법 확장을 제공합니다.

가령, Youtube 영상을 삽입할 때,

````html
<iframe width="560" height="315" src="https://www.youtube.com/embed/gnIZ7RMuLpU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
````

라고 입력하는 대신,

````html
{{</* youtube gnIZ7RMuLpU */>}}
````
라고 입력하는 것이죠.

그러면 아래와 같이 렌더링 됩니다.

{{< youtube gnIZ7RMuLpU >}}

iframe 코드를 직접 삽입하는 것보다 뛰어난 장점은 기본적으로 반응형으로 만들어준다는 점입니다.
따로 CSS를 설정해 줄 필요 없이 말이죠.

Youtube나 Twitter의 Shortcode가 내장되어 있다는 점은 좋았지만, Facebook의 동영상을 지원하는 Shotcode는 내장되어 있지 않았습니다.

[어느 포스트](/coldplay-ahfod-tour-in-seoul-2017/)에 Facebook 동영상이 들어있기도 했고, Hugo의 작동 방식이나 알아볼 겸 한번 만들어보기로 하였습니다.

코드는 다음과 같습니다.

````html
<!-- layouts/shortcodes/fb-video.html -->
<div style=" overflow:hidden;padding-bottom:56.25%;position:relative;height:0;">
  <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F{{ .Get "user" }}%2Fvideos%2F{{ .Get "id" }}%2F&show_text=0"
    style="border:none;overflow:hidden;left:0;top:0;height:100%;width:100%;position:absolute;" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
</div>
````

딱히 복잡한 부분은 없고, 인자를 받아서 출력해주는 방식입니다.

다만, Facebook 영상의 경우에는 Youtube와 주소 형식이 약간 다르기 때문에 인자를 두 부분으로 나누어 주었습니다.

일단 일반 iframe 코드는 다음과 같습니다.

````html
<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoldplay%2Fvideos%2F10157791469555253%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
````

여기에서 `https://www.facebook.com/plugins/video.php`가 href 인자로 받는 `https%3A%2F%2Fwww.facebook.com%2Fcoldplay%2Fvideos%2F10157791469555253%2F`를 복호화하면, `https://www.facebook.com/coldplay/videos/10157791469555253/`이런 식의 URL이라는 것을 알 수 있습니다.

여기서 `coldplay`를 user, `10157791469555253`를 id라고 하고,

````html
{{</* fb-video user="coldplay" id="10157791469555253" */>}}
````

위와 같이 입력해주면, 아래와 같이 잘 나옵니다.

{{< fb-video user="coldplay" id="10157791469555253" >}}

어쨌든 Facebook Video는 공유하기도 힘들고 Youtube에 비해 영 마음에 들지 않네요.

직접 영상을 올린다고 할 때 저곳에 업로드할 일은 별로 없을 것 같습니다.
