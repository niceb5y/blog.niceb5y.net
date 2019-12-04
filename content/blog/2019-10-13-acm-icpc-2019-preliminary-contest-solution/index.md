---
categories: Dev
date: 2019-10-13T02:41:54.95+09:00
title: 'ACM ICPC 2019 예선 풀이'
url: '/acm-icpc-2019-preliminary-contest-solution/'
description: 떨어지긴 했지만 문제는 풀었거든요.
featuredImage: ../../assets/image.png
---

## 개요

그냥 ACM ICPC 2019 예선에서 제가 풀었던 문제들의 풀이입니다. 못 푼 문제는.... 언젠간 풀겠죠?

## [B - Balanced String](https://www.acmicpc.net/problem/17520)

길이가 n인 **균형잡힌 문자열**이라는 녀석의 수를 세는 문제입니다.
문자열은 0과 1로 이루어져 있는데, _첫번째 문자를 포함하는_ 모든 부분 문자열의 0과 1의 개수의 차이가 1 이하인 문자열을 균형잡힌 문자열이라고 부른다고 합니다.

규칙을 찾아보자면 다음과 같습니다.

길이가 1인 경우: 0, 1

길이가 2인 경우: 01, 10

길이가 3인 경우: 010, 011, 100, 101

길이가 4인 경우: 0101, 0110, 1001, 1010

...

기존에 균형잡힌 문자열이 있을 때, 문자열의 오른쪽 끝에 문자가 하나 추가돼서 길이가 하나씩 늘어난다고 생각해 봅시다.

n이 하나 증가하여 짝수에서 홀수가 되는 경우는 이미 0과 1의 개수가 같으므로 0이나 1 중 아무거나 추가되더라도 균형잡힌 문자열입니다. 따라서 경우의 수가 2배가 됩니다.

반대로 n이 하나 증가하여 홀수에서 짝수가 되는 경우는 다릅니다. 이미 0과 1의 개수의 차이가 1 나기 때문에, 한가지 선택지밖에 없습니다. 따라서 경우의 수는 n이 증가하기 전과 같습니다.

이 사실을 가지고 식을 세워보게 되면, 2^(&lfloor;(n+1)/2&rfloor;)가 길이 n인 균형잡힌 문자열의 수가 됩니다.

문제에선 오버플로우 때문에 16769023로 나눈 나머지를 출력하도록 하고 있으며, 어렵지 않게 다음과 같이 구현할 수 있습니다.

```cpp
#include <iostream>

using namespace std;

int main() {
  int n, ans = 1;
  cin >> n;
  n++;
  n /= 2;
  for (int i = 0; i < n; ++i) {
    ans *= 2;
    ans %= 16769023;
  }
  cout << ans << "\n";
  return 0;
}

```

## [C - Byte Coin](https://www.acmicpc.net/problem/17521)

간단한 시뮬레이션 문제입니다. 어렵게 생각할 것 없이, 다음 날 가격이 오르면 사고, 다음 날 가격이 떨어지면 팔면 됩니다. 마지막 날에 코인 다 팔아서 돈으로 바꾸고 출력.

```cpp
#include <iostream>

using namespace std;

int main() {
  int n, price[15];
  long long w, coin = 0;

  cin >> n >> w;
  for (int i = 0; i < n; ++i)
    cin >> price[i];

  for (int i = 0; i < n - 1; ++i) {
    if (price[i] < price[i + 1]) {
      coin += w / price[i];
      w %= price[i];
    } else if (price[i] > price[i + 1]) {
      w += coin * price[i];
      coin = 0;
    }
  }

  w += coin * price[n - 1];
  cout << w << "\n";
}

```

## [H - Four Squares](https://www.acmicpc.net/problem/1699)

_백준과 명세가 다릅니다. ~~어디를 바꿔야 할까요?~~_

어떤 자연수 n을 가장 적은 제곱수로 표현할 수 있는지를 묻는 문제입니다.

단순히 큰 제곱수부터 빼가는 것만으로는 문제를 풀 수 없습니다.

예를 들면 12 = 2^2 + 2^2 + 2^2니 3개의 제곱수로 이루어졌다고 할 수 있지만, 큰 제곱수부터 빼게 되면 3^3 + 1^1 + 1^1 + 1^1이므로 4가 되겠죠.

재귀 함수를 통해 최소값을 구하는 함수를 만들었습니다. 물론 재귀로 작성된 피보나치 함수와 같이, 반복 연산이 많이 일어나기 때문에, 메모이제이션 기법을 적용해 주어야 시간 제한 안에 풀 수 있습니다.

```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int sq[225];
int dp[50001];

int solve(int n) {
  if (n == 0)
    return 0;

  int &ret = dp[n];
  if (ret != -1)
    return ret;

  ret = 987654321;

  for (int i = 1; i < 225; ++i) {
    if (n < sq[i])
      continue;
    if (n == sq[i]) {
      ret = 1;
      return ret;
    }
    ret = min(ret, 1 + solve(n - sq[i]));
  }

  return ret;
}

int main(void) {
  for (int i = 0; i < 225; ++i)
    sq[i] = (225 - i) * (225 - i);
  for (int i = 0; i <= 50000; ++i)
    dp[i] = -1;

  int n;
  cin >> n;

  cout << solve(n) << "\n";
  return 0;
}
```

## 잡설

대회라고 긴장상태로 코드를 짰다 보니, 이 코드들을 대회가 끝나고 처음 열어봤을 때 말도 아니더군요. 대회도 많이 하다 보면 긴장을 안하게 되는 날이 오려는지.
