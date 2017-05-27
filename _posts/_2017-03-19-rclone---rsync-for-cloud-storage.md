---
layout: post
title: "rclone: 클라우드 스토리지를 위한 rsync"
permalink: /rclone---rsync-for-cloud-storage/
categories: programming
---
## 서론

얼마 전 서랍에 박혀있는 외장하드를 발견했습니다.

사실 한 가지 역할을 제외하면 딱히 쓸모가 없는 녀석이라, 잘 꺼내서 사용하진 않습니다.

그리고 그 역할이 바로 사진을 저장하는 것이죠. 이 외장하드에는 2011년부터 카메라로 찍은 RAW파일들이 저장되어 있었습니다.

RAW 파일은 Photos 앱을 통해 iCloud로 1차로 백업이 되어 있긴 했습니다. iPhone이나 iPad에서 쉽게 사진에 접근 할 수 있도록 하기 위해서였죠. 

그래서 iCloud 1TB 옵션을 구독하는 중이긴 하지만, 많은 분들께서 아시다시피 Apple의 웹 서비스는 그렇게 믿을 만한 물건이 아닙니다.

슬슬 외장하드가 죽으려고 하지 않을까 걱정하던 차에, 2차 백업을 결심했습니다.

처음에는 AWS의 [Glacier](https://aws.amazon.com/ko/glacier/)를 사용할까 했지만, 한번 저장했다 나중에 꺼내보려면 고생 좀 한다고 들었기에 사용하지 않기로 했습니다. (사실 몇시간 기다리면 된다지만...)

다음은 Backblaze의 [B2](https://www.backblaze.com/b2/cloud-storage.html)를 보았습니다. S3처럼 언제든지 접근 가능하고, 1GB에 $0.005라는 뛰어난 가격을 제공합니다. 200GB를 사용하면 월 $1만 내면 되는 것이죠. 그래서 업로드 하는 단계까지 갔습니다.

<blockquote class="twitter-tweet" data-lang="ko"><p lang="ko" dir="ltr">Backblaze B2로 카메라 RAW를 백업중입니다. 초당 10메가 나오고… GB당 월 $0.005달러 나오고…. 괜찮네요. <a href="https://t.co/gRXsrXJwGp">pic.twitter.com/gRXsrXJwGp</a></p>&mdash; niceb5y (@niceb5y) <a href="https://twitter.com/niceb5y/status/843313405280714753">2017년 3월 19일</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

그리고 멍청하게도 그때서야 한가지 사실을 깨닫게 되죠.

<blockquote class="twitter-tweet" data-lang="ko"><p lang="ko" dir="ltr">근데 생각해보니 원드라이브 용량도 많은데....</p>&mdash; niceb5y (@niceb5y) <a href="https://twitter.com/niceb5y/status/843315625883660290">2017년 3월 19일</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Microsoft Office 구독으로 따라온 OneDrive 1TB 용량 중 960GB 가량의 노는 공간이 있었습니다. -_-;;

그런데 한 가지 문제가 있었습니다. OneDrive는 심볼릭 링크를 지원하지 않습니다. 일단 동기화하려면 OneDrive 동기화 폴더에 넣고 봐야 하는것이죠.

그래서 OneDrive를 지원하는 CLI 프로그램이 있나 검색하던 와중에 이 프로그램을 찾았습니다. 바로 [rclone](http://rclone.org)입니다.

## rclone

클라우드 스토리지를 위한 rsync라는 설명 답게 rclone은 다음과 같은 서비스들을 지원합니다.

* Google Drive
* Amazon S3
* Openstack Swift / Rackspace cloud files / Memset Memstore
* Dropbox
* Google Cloud Storage
* Amazon Drive
* Microsoft One Drive
* Hubic
* Backblaze B2
* Yandex Disk
* SFTP
* The local filesystem

OneDrive를 지원했으므로 

## 설치

