---
title: "dotfilesとスクリプトを組んでMacbookを簡単セットアップ"
emoji: "💻"
ogImage: "/ogp/profile-image.png"
date: "2024/02/02"
published: true
---

## dotfilesとスクリプトを組んでMacbookを簡単セットアップ

以前会社のMacbookをセットアップした際に一から全部したのが面倒だったので、今回は工夫しました。

https://github.com/yossydev/dotfiles

dotfilesを使っておき、`zshrc`や`Brewfile`などをGitHubにあげておくととても楽。
cloneしてきてファイルが適用されるようにコツコツ移動させて行ってもいいですが、できることならその移行も仕組み化してみました。

## 作ったスクリプト

https://github.com/yossydev/dotfiles/blob/main/scripts/setup.sh

これを実行するだけで9割のセットアップが終わるようになっています。
残りは手作業するところであったり、若干詰まったところを書いています。

### ./scrips/setup.shでは動かなかった

```bash
$ sudo chmod 444 hoge.sh
$ bash hoge.sh
```

このようにコマンドを打つ必要がありました。

https://qiita.com/ysmb-wtsg/items/6ea620076f17d13440b4#2--bash-hogesh

> ファイル名のみを指定してスクリプトを実行しようとすると、環境変数PATHに登録されたパスからファイルを検索しようとする

とありますが、正直そこまでよくわかってないです。気持ちだけは完全理解しています。

## 手作業が必要な部分

大部分のインストールは先ほどのスクリプトでカバーできたと思います。
しかし少しだけ手作業が必要な部分があるので、残りはその説明をします。

### 1. raycastの設定ファイルをimport

https://phys-edu.net/wp/?p=42570

↑
こちらが参考になると思います。

1. 事前に今まで使っていたmacbookから、raycastの設定をexportする
2. `Raycast.rayconfig`みたいな感じでdotfilesで管理する
3. 新しいmacbookでimportする

これだけでraycastの設定が全部引き継がれます。特にaliasの設定が引き継がれるのは体験として最高でした。

### 2. neovimの設定

基本的にはさっきのスクリプトで足りてますが、パッケージをインストールする必要があります。
自分の場合はPacker（lazyに早くしないと...）を使っているので、`PackerInstall`を実行しました。

この時自分は久しくPackerを更新していなかったみたいで、少し苦戦しました。

```
cd ~/.local/share/nvim/site/pack/packer/start/packer.nvim
git pull origin master
```

↑
念の為このコマンドも実行しておくと、変に詰まることもないと思います。

## まとめ

以上でセットアップは終わりです。コツコツdotfilesを作ってきていましたが、今回めちゃくちゃ簡単に移行できたので地道に頑張った甲斐があったと思いました。
皆さんもぜひdotfilesで設定ファイルを管理してみましょう。スクリプトは自分のものを参考にしてみてください😏
