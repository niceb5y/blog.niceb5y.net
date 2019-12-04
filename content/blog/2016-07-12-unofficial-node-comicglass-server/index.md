---
categories: Dev
date: 2016-07-12T12:00:00+09:00
title: Node.js 기반 ComicGlass 서버
url: /unofficial-node-comicglass-server/
description: ComicGlass 미디어 서버를 Node.js로 구현하기.
featuredImage: ../../assets/image.png
---

이런 저런(?) 것들을 보는데, ComicGlass를 잘 사용했었습니다.

ComicGlass MediaServer라고 파일을 스트리밍 해 주는 기능이 있습니다.

iTunes 켜서 파일 옮길 필요가 없어지니 매우 편리하게 사용이 가능하죠.

당연히 여기엔 서버가 필요한데, 윈도우와, 맥OS를 지원합니다. [여기](http://comicglass.net/download/toolsdownload/)서 다운로드 받을 수 있고요.

별도로, [PHP 스크립트](https://github.com/rhotta/ComicGlassIndexCGI)를 지원하는데, 서버에 돌리기엔 이게 훨씬 편리하기 때문에 얼마전까진 이 녀석을 사용했습니다.

그런데 서버가 우분투 16.04로 업데이트 했더니 PHP도 7로 올라가는 등등 많은 변화를 겪고 나니....

**안됩니다.**

찾아보니 막 deprecated된 함수도 있고... 그런데 고치기는 귀찮고... PHP 손에서 놓은지도 꽤 됐고...

그래서 만들었습니다.

제목에서 알 수 있듯이, Node.js에서 작동하며 express를 이용하여 제작하였습니다.

## [node-comicglass](https://github.com/niceb5y/node-comicglass)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/niceb5y/node-comicglass/master/LICENSE)[![Twitter](https://img.shields.io/twitter/url/https/github.com/niceb5y/node-comicglass.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

### 설치

    $ git clone https://github.com/niceb5y/node-comicglass.git
    $ cd node-comicglass
    $ npm install

### 실행

    $ npm start # http://localhost:7272/를 확인하세요

### HTTP 인증 사용하기

    $ cp user.htpasswd.sample user.htpasswd
    $ vi user.htpasswd # 여기서 유저명 & 패스워드를 설정합니다.

### 파일 업로드

`node-comicglass/public` 디렉토리에 복사해 주세요.
