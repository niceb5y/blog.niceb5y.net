---
categories: Dev
date: 2016-06-13T12:00:00+09:00
title: Heart Extractor - macOS를 위한 트위터 이미지 저장 애플리케이션
url: /heart-extractor/
description: 이름이 좀 이상하긴 하지만....
featuredImage: ../../assets/image.png
---

## Heart Extractor

<img src="https://cdn.rawgit.com/niceb5y/HeartExtractor/6d620d3df6d1867db34fca25dd6abc3d99212916/HeartExtractor.svg" alt="HeartExtractor Logo" style="min-width:150px; width:30%;">

## [v1.0(11) 다운로드](<https://github.com/niceb5y/HeartExtractor/releases/download/v1.0(11)/HeartExtractor.zip>)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/niceb5y/HeartExtractor/master/LICENSE)

Heart Extractor는 Swift로 작성된 macOS용 트위터 이미지 저장 애플리케이션입니다.

~~이론적으로~~ 3000개의 최근 트윗 또는, 최근 관심글의 이미지를 가져와서 다운로드 디렉토리에 저장합니다.

현재 트위터에 직접 업로드 된 이미지만 다운로드를 지원합니다.

여러 출처에서 업로드 된 이미지를 다운받으시려면 [관트짤줍 mono](https://twitter.com/_uyza_/status/614667799907172352)를 대신 사용하세요.

~~가볍습니다. 코드, 기능, 에러 핸들러까지 모두요.~~

## v1.0(11) 변경사항

- GIF, 동영상 다운로드 지원.

## [소스](https://github.com/niceb5y/HeartExtractor)

## [릴리즈 노트](https://github.com/niceb5y/HeartExtractor/releases)

## [버그 리포트](https://github.com/niceb5y/HeartExtractor/issues)

## Q&A

**Q. 한번 받은 이미지를 중복으로 받나요?**
A. 아니요. 한번 받은 이미지의 주소는 CoreData를 통해 저장되며, 한번 다운받았던 주소의 이미지는 생략됩니다.

**Q. 업데이트 계획은?**
A. 멀티 소스 다운로드 등등을 계획 중에 있습니다...만, 언제가 될지는...
