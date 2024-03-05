---
title: "react-queryのキャッシュで気を付けようと思ったこと"
emoji: "😵‍💫"
date: "2023/06/24"
published: true
---

## 概要

業務では react-query(現状は[tanstack-query](https://tanstack.com/) になっている)を使っており、その際に一覧取得 API のキャッシュがなぜか 2 個できてしまうことがあった。

https://tanstack.com/

## やりたかったこと

[MUI のテーブルコンポーネント](https://mui.com/material-ui/react-table/)を使用し、一覧情報を表示させたい。
その際にページネーションも実装する。
https://mui.com/material-ui/react-table/

- offset
- limit
- total

みたいなよくあるものが一覧 API を叩くと返ってくるので、`${BASE_URL}?offset=50` みたいになる想定。
そしてこの一覧ページには検索もできるようにするのだが、 この API は検索時にも使用するようになっている。

## 今回の原因

結論から言うと、一覧表示の初期値と検索時の初期値で query の値が異なっていることが問題だった。

react-query では querykey に入れた値を元にキャッシュを行う。
例えば、`querykey: ["foo"]`というものがあれば`foo`という key をもったキャッシュとされる。

https://tanstack.com/query/v4/docs/react/reference/useQuery

### query を使ってのキャッシュは気をつけろ

そして今回の実装では、一覧ページでのキャッシュは`querykey: [path, query]`のようなキャッシュの仕方をとっていた。

それが原因で、

- 一覧取得: offset の初期値を undefined に
- 検索: offet の初期値を空文字("")に

ということになってしまっていた。
これだと別々のキャッシュと見られてしまうので、2 個のキャッシュができてしまていたと言うことである。

## 対処方法と学び

undefined をやめ、初期値は必ず空文字を代入するようにし、キャッシュ問題を解消しました。

react-query や useSWR などはキャッシュなどあまり実装側が意識せずともいい感じに処理してくれると思いますが、ログ見て確認すると意外と変なキャッシュが生まれてたりするので気をつけ料と思った。
(触れてないですが、実は別箇所でもキャッシュが 2 個作られてしまっているところもあった 🙄)
