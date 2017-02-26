---
layout: post
title: "윤년"
permalink: /a-leap-year/
categories: update
---
별 의미 없지만. 윤년 기념.

```js
var year = (new Date()).getFullYear();
if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
	console.log('메리 윤년!');
}
```
