---
title: "next/imageのlocal imageとremote imageのパフォーマンスの違いをみてみる"
emoji: "🫣"
ogImage: "/ogp/profile-image.png"
date: "2024/01/28"
published: true
---

## next/imageのlocal imageとremote imageのパフォーマンスの違いをみてみる

`next/image`を使った画像の表示方法には、`local image`と`remote image`の二つがあります。
しかし最近まで自分は`remote image`の方法で画像を表示させており、`local image`の存在を知りませんでした。

この二つについて、なんとなく違いはわかりますがどう扱いを分けるべきなのかわからなかったので、パフォーマンスの観点からみて調べてみました。

## 環境

今回の検証用に使ったリポジトリはこちらになります。

https://github.com/yossydev/difference-between-remote-and-local-for-next-image

https://github.com/yossydev/difference-between-remote-and-local-for-next-image/blob/71dde25f21d112fad82b1c0fc28a1e683a988215/src/app/page.tsx#L1-L37
4パターン用意しています。

1. imgタグ
2. local image
3. remote image
4. remote image(外部画像)

比較として、imgタグも設置してみました。画像は854 KBのものを用意しました。

## 検証

`next/image`を使用すると画像の最適化を自動で行ってくれます。自分はここで**どちらかが最適化されないのではないか** /
**最適化される場合でも少し差分があるのではないか**と考えました。

![キャッシュの消去とハード読み込みした際の検証結果](https://github.com/yossydev/difference-between-remote-and-local-for-next-image/assets/87469023/ddee1f92-cdef-47f9-b835-472de855f805)
_キャッシュの消去とハード読み込みした際の検証結果_

上から、

1. imgタグ: 875KB
2. local image: 9.8KB
3. remote image: 9.9KB
4. remote image(外部画像): 10.0KB

の順番です。

### 1. どちらかが最適化されないのではないか

ご覧いただければ、`img`タグと`next/image`で画像サイズが大きく異なることがわかると思います。そのため、「remote / local関係なくどちらも最適化される」ということがわかりました。

### 2. 最適化される場合でも何かしら差分があるのではないか

次に、「最適化される場合でも何かしら差分があるのではないか」と考えました。
検証方法は、**キャッシュの消去とハード読み込み**と**通常の再読み込み**をChromeで10回ほど試しました。

#### a. キャッシュの消去とハード読み込み

2. local image: 9.8KB
3. remote image: 9.9KB
4. remote image(外部画像): 10.0KB

先ほどの検証結果にもあった通り、local imageとremote imageの画像サイズに大きな差は出ませんでした。
**大きな差は出なかった**という言葉の通り、少しは差が出ましたが、最大でも0.2kbの差分、一つが大きくなる訳ではなくとも全てで増減するという理由から、誤差であると判断しました。

#### b. 通常の再読み込み

![通常の再読み込みをした際の検証結果](https://github.com/yossydev/difference-between-remote-and-local-for-next-image/assets/87469023/1a97630f-f643-4ed4-840d-b1a82f47d6da)

サイズがそれぞれ異なる結果となりました。

1. imgタグ: disk キャッシュ
2. local image: memory キャッシュ
3. reomte image(外部画像): memory キャッシュ
4. remote image: 54B

**通常の再読み込み**の場合だと場合だと、38msでremote imageが一番Timeが遅いことがわかりました。
（あとimgタグがキャッシュされることを検証した中で初めて知りました。）

https://zenn.dev/kaa_a_zu/articles/f1430cf681b185

## まとめ

local imageとremote imageの差分は、パフォーマンス的にはハード読み込みを行った場合では違いはほとんどない。
ただし、通常の再読み込みを行った場合はmemory cacheされているため、publicフォルダにおいた画像を表示する際はlocal imageを使用するようにするのが良い。

remote imageはs3などのリモートから画像を表示する際に使用するようにする。

ということが今回の検証でわかりました。

## 関連

- https://nextjs.org/docs/app/building-your-application/optimizing/images
- https://github.com/vercel/next.js/tree/canary/examples/image-component
- https://dev.to/nj145/all-you-need-to-know-about-nextjs-image-optimization-and-how-to-effectively-make-use-of-it-4pmh
- [next/image の local images と remote images の使い分け](https://zenn.dev/taigakiyokawa/scraps/bab778606b11d4)
