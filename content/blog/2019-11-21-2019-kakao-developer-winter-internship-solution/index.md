---
categories: Dev
date: 2019-11-21T02:30:25+09:00
title: 2019 카카오 개발자 겨울 인턴십 코딩 테스트 풀이
url: /2019-kakao-developer-winter-internship-solution/
description: 2019 카카오 개발자 겨울 인턴십 코딩 테스트를 풀어보았습니다.
featuredImage: ./01.png
---

![2019 카카오 개발자 겨울 인턴십](01.png)

어쩌다 카카오 인턴십에 지원하게 되었습니다.

시험 끝나고 지원서 제출하느라 반쯤 정신이 나가서 자기소개서도 완전 날림으로 썼었는데, 코딩 테스트로 어떻게 만회가 됐는지 1차는 붙을 수 있었습니다.

다음은 면접인데.... 음....

어쨌든 이번엔 운 좋게 5문제 다 풀 수 있었습니다. 9월에 진행됐던 카카오 블라인드 채용의 코드 테스트보다 문제 수도 적고 쉬웠습니다. 그땐 7문제 중에 4문제 풀었으니, 난이도의 차이는 꽤 존재한다고 할 수 있습니다.

블라인드 때와는 다르게 까먹지 않고 코드를 백업했습니다. 분명 그때도 어딘가 저장했던 것 같긴 한데....

여튼 잡설은 여기까지 하고, 본격 풀이.

아직 문제가 공개되지 않았는데, 조만간 카카오 블로그에 올라온다고 하니 올라오면 추가하도록 하겠습니다.

## 1

```cpp
#include <iostream>
#include <queue>
#include <stack>
#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<int>> board, vector<int> moves) {
  int answer = 0;
  int size = board.size();
  stack<int> stk;
  vector<queue<int>> q(size);
  for (int i = 0; i < size; i++) {
    for (int j = 0; j < size; j++) {
      if (board[i][j] != 0) {
        q[j].push(board[i][j]);
      }
    }
  }

  for (auto &i : moves) {
    if (q[i - 1].empty())
      continue;
    int n = q[i - 1].front();
    q[i - 1].pop();
    if (!stk.empty() && stk.top() == n) {
      answer += 2;
      stk.pop();
    } else {
      stk.push(n);
    }
  }

  return answer;
}
```

간단한 시뮬레이션 문제입니다.

인형 뽑기를 진행하는데, 뽑는 쪽은 위부터 사라지고, 놓는 쪽은 아래부터 채워지니 스택과 큐를 잘 조합하면 됩니다.

뽑아서 놓기 전에 인형의 모양을 확인하고 같으면 두 인형을 제거하고 답에 2씩 추가해주면 됩니다.

## 2

```cpp
#include <algorithm>
#include <set>
#include <string>
#include <vector>

using namespace std;

vector<int> solution(string s) {
  vector<int> answer;
  vector<vector<int>> v;
  for (int i = 1; i < s.length() - 1; i++) {
    vector<int> tmp;
    i++;
    int num = 0;
    while (s[i] != '}') {
      if (s[i] == ',') {
        tmp.push_back(num);
        num = 0;
      } else {
        num *= 10;
        num += s[i] - '0';
      }
      i++;
    }
    tmp.push_back(num);
    v.push_back(tmp);
    i++;
  }
  sort(v.begin(), v.end(),
       [](vector<int> a, vector<int> b) { return a.size() < b.size(); });
  set<int> st;
  for (auto &i : v) {
    for (auto &j : i) {
      if (st.find(j) == st.end()) {
        st.insert(j);
        answer.push_back(j);
        break;
      }
    }
  }

  return answer;
}
```

괄호 파싱하는 게 귀찮았던 문제였습니다. 일단 숫자의 배열의 배열로 만들어 두고 나면, 나머지는 간단합니다.

숫자 배열의 원소 수 순으로 배열해서 순서대로 정답 배열에 추가 후 출력하면 됩니다.

정답 배열에 해당 숫자가 존재하는지 판단하기 위해 `std::set`을 사용하였습니다.

## 3

```cpp
#include <set>
#include <string>
#include <vector>

using namespace std;

vector<string> _user_id, _banned_id;
vector<bool> ban;
set<int> s;

bool match(const string &user_id, const string &banned_id) {
  if (user_id.length() != banned_id.length())
    return false;
  for (int i = 0; i < user_id.length(); i++) {
    if (banned_id[i] == '*')
      continue;
    if (user_id[i] != banned_id[i])
      return false;
  }
  return true;
}

void solve(int n) {
  if (n == _banned_id.size()) {
    int x = 0;
    for (int i = 0; i < _user_id.size(); i++) {
      if (ban[i])
        x |= (1 << i);
    }
    s.insert(x);
    return;
  }
  for (int i = 0; i < _user_id.size(); i++) {
    if (ban[i])
      continue;
    if (match(_user_id[i], _banned_id[n])) {
      ban[i] = true;
      solve(n + 1);
      ban[i] = false;
    }
  }
}

int solution(vector<string> user_id, vector<string> banned_id) {
  _user_id = user_id;
  _banned_id = banned_id;
  ban.resize(user_id.size(), false);
  solve(0);
  return s.size();
}
```

밴 규칙 당 한 명씩 밴 했을 때, 경우의 수를 구하는 문제입니다.

백트래킹을 이용하여 모든 경우의 수를 구한 뒤, 밴 당한 멤버의 인덱스를 비트 연산을 통해 기록했습니다. 해당 값을 `std::set`에 집어넣어 중복을 확인할 수 있었고요. 정답은 `std::set`의 원소의 수가 됩니다.

## 4

```cpp
#include <algorithm>
#include <set>
#include <string>
#include <vector>

using namespace std;

vector<long long> solution(long long k, vector<long long> room_number) {
  vector<long long> answer;
  vector<long long> tmp = room_number;
  sort(tmp.begin(), tmp.end());
  set<long long> s;
  for (int i = 0; i < tmp.size(); i++) {
    if (i > 0 && tmp[i] <= tmp[i - 1]) {
      tmp[i] = tmp[i - 1] + 1;
    }
    s.insert(s.end(), tmp[i]);
  }
  for (auto &rn : room_number) {
    auto iter = s.lower_bound(rn);
    answer.push_back(*iter);
    s.erase(iter);
  }
  return answer;
}
```

원하는 번호의 방을 배정해주는 문제입니다. 원하는 번호의 방이 비어있으면 그 방을 주고, 아니면 그보다 큰 가장 작은 번호의 비어있는 방을 줍니다.

효율성 테스트 통과시키느라 가장 마지막까지 골치를 썩혔던 문제입니다.

첫 구현에서는 모든 범위의 수를 다 `std::set`에 집어넣고 처리하는 방법을 사용했었는데, 이 방법으로는 시간 초과가 발생합니다.

따라서 이 구현에서는 먼저 필요한 방의 번호만 모두 구해 계산합니다. `room_number` 배열을 `tmp` 배열로 복사한 뒤 정렬합니다. 그다음 tmp를 순회하면서 `std::set`에 방 번호를 넣습니다. 만약 직전에 넣은 번호가 이제 넣을 번호와 같거나 크다면 지금 넣는 방의 번호를 이전의 방 번호 + 1로 만들어 집어넣습니다.

그 뒤 다시 `room_number` 배열을 순회하면서 `lower_bound`로 알맞은 방 번호를 찾아 줍니다. 사용한 방 번호는 `std::set`에서 제거해주도록 하고요.

## 5

```cpp
#include <algorithm>
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> stones, int k) {
  int answer = 987654321;

  for (int i = 0; i < stones.size() - k + 1; i++) {
    int x = 0;
    for (int j = i; j < i + k; j++) {
      x = max(x, stones[j]);
    }
    answer = min(answer, x);
  }
  return answer;
}
```

오히려 4번보다 빨리 끝나 살짝 놀랬던 문제였습니다.
징검다리에서 연속된 돌을 k개 검사했을 때, 값이 모두 0이면 더 이상 사람이 건널 수 없습니다.
따라서 k개의 돌을 검사했을 때 숫자의 최댓값이 그 지점을 통과할 수 있는지 없는지를 결정짓습니다.
그 값의 최솟값을 구하면 정답이 나옵니다.

## 변명

문제를 보지 않고 백업된 코드만으로 설명해보려니 문제의 용어가 생각이 안 나서 어렵네요. 다음에 문제 공개되면 보충해서 서술하도록 하겠습니다.

끝.
