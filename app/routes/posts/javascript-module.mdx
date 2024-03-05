---
title: "JavaScriptのモジュール(CommonJS / ESModules)について"
emoji: "👾"
ogImage: "/ogp/ogp-javascript.png"
date: "2023/08/29"
published: true
---

業務で CommonJS と ESModules の違いについて触れることがあり、最初はこの二つの違いについて調べていたのですが、気づいたら JS のモジュールの歴史まで調べていたので、記念にブログにまとめてみます。

## CommonJS / ESModules はとはそもそも何か

**JavaScript プログラムを必要なときにインポートできる個別のモジュールに分割するメカニズムのこと**

## JavaScript のモジュール機能の歴史

### 初期の JavaScript

初期の JavaScript は、必要な場所で、ちょっとしたインタラクションを提供する、孤立したスクリプティングタスクを実行することでした。
`インタラクションの例`: ユーザーがボタンをクリックしたときに何かしらのアクションを起こす
`孤立したスクリプティングタスクを実行する`: 単一の、他のコードとは独立したタスクのこと
`単一のタスク`: 特定のインタラクションのこと
`他のコードとは独立したタスク`: そのタスクが他のタスクやコードに影響を受けず、さらに与えずに動作すること
(特定のボタンをクリクしたときだけ特定のポップアップが表示され、他のボタンをクリックしてもそのポップアップは表示されない、という状態)

### モジュール機能がない頃の JavaScript の問題点

#### グローバルスコープの汚染

初期の JavaScript は script を読み込んで実行していましたが、読み込む順番によって値の上書きが起こってしまうことがありました。

```ts: foo.js
var message = "Hello from script 1";
```

```ts: bar.js
var message = "Hello from script 2";
console.log(message); // "Hello from script 2"
```

```html: index.html
<script src="foo.js"></script>
<script src="bar.js"></script> <!-- foo.jsのmessage変数が上書きされてしまう" -->
```

#### コードの再利用性と保守性

モジュール機能がないので、export / import 機能が使えません。
そのため、同じ実装をコピペしたりして書く必要がありました。

#### 依存関係の管理

script を読み込む順番を間違うと、まだ定義されてなくてエラーになったりしていました。

```ts: script1.js
function doSomething() {
 console.log('Doing something...');
}
```

```ts: script2.js
function doAnotherThing() {
 doSomething();
  console.log('Doing another thing...');
}
```

```ts: script3.js
doAnotherThing();
```

```html: index.html
<script src="script1.js"></script>
<script src="script3.js"></script> <!-- doAnotherThingはまだ定義されていないのでエラーになる -->
<script src="script2.js"></script>
```

モジュールがあれば、import されていれば javascript エンジンが自動で解析に行ってくれるため、エラーが起きなくなりました。

#### 名前空間

グローバルスコープによる値の上書きを防ぐため、開発者がオブジェクトを定義していました。

```ts
var myApp = {};

myApp.someFunction = function () {
  console.log("Hello, world!");
};

myApp.someVariable = "Hello, world!";
```

myApp は開発者が定義したオブジェクトで、別の場所で someFunction があっても上書きを防いでいます。

### モジュール機能の誕生

「ブラウザ以外でも JavaScript を使えるようにしていきたい！！」
という動きがありました。
ただ当時の JavaScript にはまだモジュール機能がなく、先ほども言った、**モジュール機能がない頃の JavaScript の問題**がりました

「モジュールがない JavaScript でも、モジュールを使えるようにしたい！！」
そこで 2009 年に新しい JavaScript の仕様を決めた CommonJS が生まれました 🎉🎉

そしてこの CommonJS の誕生により、 JavaScript をサーバーサイドでも使える、Node.js が誕生しました 🎉🎉

さらに 2015 年には、ブラウザ環境での利用を目的に、ESModules が誕生しました 🎉🎉

### CommonJS はブラウザで動かないため、せっかく Node.js で作ったものたちがブラウザでは使えなかった

CommonJS が誕生したのはいいことですが、ただ CommonJS はブラウザでは動きません
後述しますが理由としては、

- サーバーサイド向けに作られた仕様のため
- 同期的なモジュールの読み込みによる UX の低下が考えられるため

です。
そのため、CommonJS を使った Node.js 製のライブラリなどがブラウザで動かないという問題が起きてしまいました。

これを解決するのが、Webpack や Vite のような**ビルドツール**になります。

ちなみに、こういった CommonJS を ESModules にしてアプリを動かそうとすることを FakeESM と呼ぶそうです。

## CommonJS

### 同期的なモジュールの読み込み

CommonJS は同期的なモジュールの読み込みを行います。
この`同期的`とはどういった意味か。

以下のようなディレクトリ構造のアプリがあったとします。

```
- main.js // foo.jsとbar.jsをimportしている
 - foo.js // hoge.jsをimportしている
  - hoge.js
 - bar.js // bar.jsをimportしている
  - baz.js
```

`main.js` で `foo.js` と `bar.js` を import しています。
さらに `foo.js` は `hoge.js` を、`bar.js` は `baz.js` を import しています。

上記を踏まえ CommonJS の同期的な読み込みについて説明をします。
CommonJS では、import があると他の全ての読み込みをやめ、その import の中身を JavaScript エンジンは解析しようとします。
そのためもし CommonJS 形式がブラウザで動いてしまうと読み込みに時間がかかってしまい UX が低下してしまう可能性がありますが、逆にサーバーサイドでは**初期読み込みのシンプルさ**と、**サーバーのリソース管理**と言った点で、同期的な読み込みの方が良いとされています。

1. **初期読み込みのシンプルさ**:
   サーバー環境では、アプリケーションの起動時に一度だけモジュールを読み込むことが一般的なため、同期的な読み込みにすることで、この初期読み込みをシンプルにすることが可能です。
   起動時にすべての依存関係が解決され、モジュールがすぐに使用可能になります。
2. **サーバーのリソース管理**:
   サーバーでは、一度に多くのリクエストを処理するため、非同期の操作が他のリクエストの処理をブロックする可能性があります。
   そのため、同期的な読み込みは、モジュール読み込みがリクエスト処理の邪魔をしないようにします。

### require / exports

CommonJS では、モジュールのインポートには`require`を、エクスポートには`module.exports`を使用します。

#### require

```ts
const math = require("./math");

console.log(math.sum(1, 2));
console.log(math.sub(2, 1));
```

node_modules からモジュールを import する

```ts
const express = require("express");
const morgan = require("morgan");
const path = require("path");
```

#### exports

```ts
const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

module.exports = {
  sum,
  sub,
};
```

## ESModules

ECMA Script Modules の略称。
ES6(ES2015)でサポートされました。

今では全ての主要ブラウザが ES モジュール構文をサポートしています。

### 非同期なモジュールの読み込み

先ほども言った通り、CommonJS は同期的な読み込みのため、モジュールの読み込みが始まると他の全ての操作をブロックします(ブロッキング操作)
モジュールの読み込みを非同期にすることで、複数のモジュールをバックグラウンドで読み込み、同時に他の処理も行われるため、ブラウザでの UX を向上させることができます。

### import / export

#### import

```ts
import { sum, sub } = from "./math.js"

console.log(sum(1,2));
console.log(sub(2,1));
```

#### export

```ts
export const sum = (a, b) => {
  return a + b;
};

export const sub = (a, b) => {
  return a - b;
};
```

### ESModules を Node.js で動かしたい

eslint のルールによっては, require の使用を禁止するルールなど設定しているアプリもあるのではないでしょうか。
警告やエラーが出ているのに放置しとくのは気持ち悪いし、それに慣れてしまとバグを見逃す可能性もあります。

実は拡張子を.mjs に変えると Node.js でも ESModules 構文が使えるんです。
試しにこの自分のブログは`next.config.js`は`next.config.mjs`にしています。

https://github.com/yossydev/blog/blob/main/apps/web/next.config.mjs

ESModules にすることで import の静的解析が可能なので、TypeScript による型の恩恵も受けれます。
パフォーマンス面でどこまで差があるのかわかっていないのですが、問題がなければ使っていきたいですね。

## まとめ

以上が、JavaScript のモジュールについてです。
おそらく Next.js を使ったフロントエンドの開発だとあんまりモジュールについて意識することはないのかなと思います。

しかし調べてみて、

- なんで require と import ってあるんだろうなぁ
- なんか require だと動くのに import だと動かないなぁ
- require ってなんか any になるよなぁ

などの普段なんとなく変に思ってはいたけど流してしまっていた部分を理解できたのでとても良かったなと感じています。

## 参考

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/node_modules

https://medium.com/@diego.coder/module-system-in-node-js-commonjs-c89f33257062

https://blog.logrocket.com/commonjs-vs-es-modules-node-js/

https://www.wantedly.com/companies/wantedly/post_articles/410531

https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/

https://zenn.dev/naoki_mochizuki/articles/46928ccb420ee733f78f#%E7%AC%AC%E4%B8%89%E7%AB%A0%3A-javascript%E4%BD%BF%E3%81%84%E5%88%86%E3%81%91%E5%95%8F%E9%A1%8C%E3%81%A8%E3%80%81%E3%81%9D%E3%81%AE%E5%AF%BE%E5%BF%9CommonJS

https://qiita.com/suin/items/a106289e2d1d8d9c1490#esm%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC%E3%81%8C%E9%9D%9E%E5%90%8C%E6%9C%9F%E5%9E%8B%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%81%AE%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88
