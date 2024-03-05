---
title: "ES2024で導入予定のAtomics.waitAsyncについて理解する"
emoji: "👀"
description: "ES2024で導入される予定の機能が発表され、その中の機能の一つに、Atomics.waitAsyncというものがあります。この記事では、Atomics.waitAsyncについての深掘りブログになっています。"
date: "2024/02/25"
published: true
---

# ES2024で導入予定のAtomics.waitAsyncについて理解する

## Intro

ES2024で標準化される予定の機能が発表されました。

https://github.com/tc39/ecma262/releases/tag/es2024-candidate-2024-02

そして今回はそのうちの一つである。[Atomics.waitAsync](https://github.com/tc39/proposal-atomics-wait-async)について、今回は調べていきたいと思います。

他の機能を把握するには[【JavaScript】ES2024の新機能まとめ](https://qiita.com/rana_kualu/items/16539958b0c9d3b3dba8)という記事がおすすめです。

## モチベーション

この記事を書こうと思ったモチベーションは以下になります。

- `Atomics.waitAsync`がES2024の中で一番謎多き存在だったので気になった
- 今後のためにも、JavaScirptに新しく組み込まれる標準仕様を早い段階でキャッチアップできるようになっていかった

## 話さないこと

- Atomics.waitAsyncを使ったアプリの作り方

こちらについては今回はスコープ外としています。どんな機能か理解できれば良いので。

## 参考リポジトリ

https://github.com/yossydev/atomics-wait-async-playground

`Atomics.wait`と`Atomics.waitAsync`の動きを理解するためのリポジトリです。

## 機能説明

`Atomics.waitAsync`を一言で説明すると、
**[Atomics.wait](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait)の非同期版で、共有メモリ上の特定のインデックスの値が指定した値から変わるまで待つ機能**
のことです。

この一文を言われてもなんのこっちゃって感じだと思います。僕は本当にわけわからんって感じでした。
`Atomics.waitAsync`自体はそこまで難しくなく、ただ事前知識がないと難しいので、順番に説明していきます。

1. 異なるスレッド間を共有メモリを使ってデータのやり取りを可能に
1. アトミック操作について
1. Atomics.waitについて
1. 改めてAtomics.waitAsyncについて

## 1. 異なるスレッド間を共有メモリを使ってデータのやり取りを可能に

まず**共有メモリ上**というJavaScriptではあまり聞かないような言葉が出てきました。
これは[SharedArrayBuffer](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)を使うことで、**異なるスレッド間を共有メモリ上でデータのやり取りができるようにする機能**があり、そちらのことを指していました。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer

基本的には、異なるスレッドはWeb WorkerやService Workerを使用し、そして別スレッドとのデータのやり取り[postMessage](developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage)を使用すると思います。
以下は[mdn](developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage)にあったpostMessageのサンプルコードです。

```js:developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
const myWorker = new Worker("worker.js");

first.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};

second.onchange = () => {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message posted to worker");
};
```

別スレッドとデータのやり取りを行う際、通常であれば渡す側でシリアライズされ、受け取り側でデシリアライズされます。

:::details シリアライズとは
シリアライズとは、データ構造やオブジェクトの状態を、ファイルやメモリ、ネットワーク越しの通信で保存や送信が可能な形式に変換するプロセスのことです。
例えばJSONデータを送ろうとした際に、渡す側で文字列に変換（シリアライズ）され、受け取り側で再度JSONに変換されます。
:::

### メリット

`SharedArrayBuffer`を使うことで、シリアライズのステップを省略することができます。共有メモリ上でデータのやり取りをすることで、そのままデータのやり取りが可能になるためです。
これにより、高速なデータのやり取りが可能になります。

### SharedArrayBufferの問題点

`SharedArrayBuffer`をブラウザで使用しようとするとエラーになります。

![SharedArrayBufferをブラウザでそのまま使用するとUncaught ReferenceError: SharedArrayBuffer is not definedになる](https://github.com/yossydev/blog/assets/87469023/3fda53d0-7331-4d86-b4e3-0c65af912833)

これは**2018年にSpectreの問題があることがわかったため一度ブラウザが無効化**し、**2020年に再度標準化され直したため**です。

標準化され直した際にセキュリティ面を考慮し、以下二つをヘッダーに含めなければならなくなりました。

```
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

これによりブラウザでSharedArrayBufferを有効にできます。

## 2. アトミック操作

`SharedArrayBuffer`についてはなんとなく理解していただけたかと思います。
`Atomics.waitAsync`は`Atomics`オブジェクトの`waitAsync`というプロパティを使用しているんですが、この「`Atomics`オブジェクト」という普段Webアプリを開発していると見慣れない存在について説明します。

実は`Atomics`オブジェクトは先ほどのwaitAsyncやwait以外にもあります。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Atomics

このAtomicsオブジェクトを使った操作を、**アトミック操作**と呼びます。
そしてアトミック操作とは、**一度処理が始まると割り込みができない分割不可能な処理**のことを指します。

あるスレッドでアトミック操作が始まった場合、他のスレッドでアトミック操作をすることができなくなるということです。この時別にアトミック操作はブロッキングはしないので、その他の処理は引き続き動きます。

名前がアトミック（原子）なので、それ以上分割することができないって意味があるんでしょうね。知らんけど。

このアトミック操作は、先ほどの[SharedArrayBuffer](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)を表示するための、`Int32Array`か`BigInt64Array`を渡した時のみ使用可能になります。

実際にコードベースでアトミック操作の挙動を見ていきましょう。

```ts
onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);
  console.log("Worker: Waiting for the signal...");

  const index = 0;
  const expectedValue = 0;
  Atomics.add(sharedArray, index, 100);
  const updatedValue = Atomics.load(sharedArray, index);
  console.log(`Worker: Received the signal with updated value: ${updatedValue}`);
  postMessage(`Updated value is ${updatedValue}`);
};
```

このスレッドは、メインスレッドから`SharedArrayBuffer`を受け取っています。

```ts
Atomics.add(sharedArray, index, 100);
```

今回のaddメソッドのケースで言えば、index番目（今回だと0番目）のメモリ領域に、100を追加しているという処理です。処理自体は至ってシンプルですね。

## 3. Atomics.waitについて

ここまででかなり事前知識はついたと思うので、次に[Atomics.wait](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait)について説明します。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait

これは**特定のメモリ領域の値が指定した値にから別の値に変更されたことを検知するまで待機する**という機能になります。
そしてこの時にポイントなのが、一度処理が始まると、そのスレッドの他の処理をブロッキングしてしまいます。そのため公式ではメインスレッドでの使用を非推奨にしています。

実際にこちらもコードベースで確認していきましょう。

```ts
onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);
  console.log("Worker: Waiting for the signal...");

  const index = 0;
  const expectedValue = 0;
  Atomics.wait(sharedArray, index, expectedValue); // 0番目の値が0から変更されるまでこれ以降の処理を全てブロックする。

  Atomics.add(sharedArray, index, 1000);
  const updatedValue = Atomics.load(sharedArray, index);
  console.log(`Worker: Received the signal with updated value: ${updatedValue}`);
  postMessage(`Updated value is ${updatedValue}`);
};
```

先ほどのコードに`Atomics.wait`を追加しました。これにより指定したメモリ領域の0番目の値が0から別の値に変更されるまでそのスレッド内の処理がストップするようになりました。

待機しているアトミック操作に変更されたことを検知させるためには[Atomics.notify](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Atomics/notify)を使用します。

```ts
onmessage = function (e) {
  const sharedArray = new Int32Array(e.data);

  const num = 1;
  Atomics.add(sharedArray, 0, num); // 0番目のメモリの値が1になる
  Atomics.notify(sharedArray, 0, num); // 0番目のメモリの値が2になる
  console.log("Signal sender: Data updated and workers notified.");
};
```

こちらのコードにより、メモリが2に変わりました。（waitはaddでは検知しない。）
今回作成したリポジトリでは、waitすると本当に処理がストップするのか検証しているので、もし興味があれば見てみてください

![Atomics.waitを使うとそのスレッドの処理が止まるのか検証した動画](https://github.com/yossydev/atomics-wait-async-playground/assets/87469023/663783e0-66c2-41da-81a8-6c51ac074301)

## 4. Atomics.waitAsyncについて

ここまでで必要な事前知識が終わり、いよいよ[Atomics.waitAsync](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync)についてです。
とは言いつつも、ここまでの説明を理解していただければ、この機能についてわかった方も多いのではないでしょうか。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync

改めてですが`Atomics.waitAsync`を一言で説明すると、**[Atomics.wait](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait)の非同期版で、共有メモリ上の特定のインデックスの値が指定した値から変わるまで待つ機能**というものになります。

`Atomics.waitAsync`は、監視しているメモリの値を第三引数に入れるようにします。

```js
Atomics.waitAsync(typedArray, index, value);
Atomics.waitAsync(typedArray, index, value, timeout);
```

その際に指定した値とメモリ内の値に応じて、以下のようなレスポンスが返ってきます。

- 値が同じだった場合: Promiseが返る
- 値が最初と変わった場合: "OK"
- 値がすでに違っていた場合: "not-equal"
- 値がすでに違っていて、かつtimeoutに0を指定して場合: "timed-out"

`Atomis.waitAsync`はPromiseがrejectされることはなく、必ず上記のどれかが返ってきます。

念の為コードベースでも確認しましょう。

```ts
onmessage = async function (e) {
  const sharedArray = new Int32Array(e.data);
  console.log("Worker: Waiting asynchronously for the signal...");

  const index = 0;
  const expectedValue = 0;
  const waitResult = Atomics.waitAsync(sharedArray, index, expectedValue);

  const result = await waitResult.value;

  if (result === "ok") {
    console.log("Atomics.waitAsync: OK, the shared memory has changed.");
  } else if (result === "not-equal") {
    console.log("Atomics.waitAsync: Not-equal, the value was already different.");
  }

  const updatedValue = Atomics.load(sharedArray, index);
  postMessage(`Updated value is ${updatedValue}`);
};
```

rejectされることがないので、try catchを使う必要はないです。
あとはAtomis.waitの時と同じように変更されたことを`Atomics.notify`で知らせてあげれば動きます。事前知識があれば意外とこれ自体は難しくないですね。

## まとめ

今回の学びの整理です。

- ES2024でAtomics.waitAsyncというものが標準化予定。
- Atomics.waitAsyncとは、[Atomics.wait](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait)の非同期版で、共有メモリ上の特定のインデックスの値が指定した値と一致するまで待つ機能のこと。
- Atomics.waitとは、指定したindex番号の指定した値から変更したことを検知するまで待機する機能である。
- Atomics.waitAsyncは、Atomics.waitのブロッキングの問題にいるメインスレッドでは非推奨になっている問題を解消するために提案されたものである。
- Atomicsオブジェクトは、様々なアトミック操作を可能にするオブジェクトである。
- アトミック操作は、一つのアトミック操作が始まった場合、他のスレッドでアトミック操作ができなくなるという機能である。
- SharedArrayBufferを使うことで、異なるスレッド間で共有メモリ上でデータのやり取りを行えるようにする機能である。
  - しかしセキュリティの問題から、二つのoriginをheaderに含めないとブラウザでは使用できない。

今回は調べるのに時間がかかり結構大変でしたが、Atomics.waitAsyncについてはかなり理解できた気がしているので満足です。

## 参考

- [【JavaScript】ES2024の新機能まとめ](https://qiita.com/rana_kualu/items/16539958b0c9d3b3dba8)
- [ES2024 Release](https://github.com/tc39/ecma262/releases/tag/es2024-candidate-2024-02)
- [Atomicsオブジェクト](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics)
- [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)
- [【JavaScript】 SharedArrayBufferの使い方とブラウザでの制限](https://note.affi-sapo-sv.com/js-sharedarraybuffer.php)
- [v8 blog](https://v8.dev/features/atomics)
