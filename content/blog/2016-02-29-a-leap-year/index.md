---
categories: Life
date: 2016-02-29T12:00:00+09:00
title: 윤년
url: /a-leap-year/
description: 메리 윤년!
featuredImage: ../../assets/image.png
---

별 의미 없지만. 윤년 기념.

```js
var year = new Date().getFullYear()
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  console.log('메리 윤년!')
}
```
